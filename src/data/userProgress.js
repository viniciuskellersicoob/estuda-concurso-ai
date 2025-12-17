// Sistema de Progresso do Usuário - LocalStorage
// Gerencia qual módulo o usuário está, quais completou, e scores

const STORAGE_KEY = 'estuda_concurso_progress';

// Estrutura de dados:
// {
//   "direito penal": {
//     currentModule: 1,
//     completedModules: [],
//     moduleScores: {},
//     totalXP: 0,
//     lastAccess: "2024-01-15"
//   }
// }

// ===== FUNÇÕES DE GET =====

export function getAllProgress() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : {};
    } catch (error) {
        console.error('Erro ao carregar progresso:', error);
        return {};
    }
}

export function getSubjectProgress(subjectName) {
    const allProgress = getAllProgress();
    const normalized = subjectName.toLowerCase().trim();

    return allProgress[normalized] || {
        currentModule: 1,
        completedModules: [],
        moduleScores: {},
        totalXP: 0,
        lastAccess: new Date().toISOString()
    };
}

export function isModuleCompleted(subjectName, moduleId) {
    const progress = getSubjectProgress(subjectName);
    return progress.completedModules.includes(moduleId);
}

export function getModuleScore(subjectName, moduleId) {
    const progress = getSubjectProgress(subjectName);
    return progress.moduleScores[moduleId] || null;
}

export function getCurrentModule(subjectName) {
    const progress = getSubjectProgress(subjectName);
    return progress.currentModule || 1;
}

// ===== FUNÇÕES DE SET =====

export function markModuleComplete(subjectName, moduleId, score) {
    const allProgress = getAllProgress();
    const normalized = subjectName.toLowerCase().trim();

    if (!allProgress[normalized]) {
        allProgress[normalized] = {
            currentModule: 1,
            completedModules: [],
            moduleScores: {},
            totalXP: 0,
            lastAccess: new Date().toISOString()
        };
    }

    const subjectProgress = allProgress[normalized];

    // Adicionar módulo aos completados se ainda não estiver
    if (!subjectProgress.completedModules.includes(moduleId)) {
        subjectProgress.completedModules.push(moduleId);
        subjectProgress.completedModules.sort((a, b) => a - b); // Manter ordenado
    }

    // Salvar score
    subjectProgress.moduleScores[moduleId] = {
        questionsCorrect: score.correct,
        questionsTotal: score.total,
        percentage: Math.round((score.correct / score.total) * 100),
        date: new Date().toISOString()
    };

    // Atualizar módulo atual para o próximo
    subjectProgress.currentModule = moduleId + 1;

    // Adicionar XP (50 base + bonus por performance)
    const xpGained = 50 + (score.correct * 5);
    subjectProgress.totalXP += xpGained;

    // Atualizar último acesso
    subjectProgress.lastAccess = new Date().toISOString();

    // Salvar
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(allProgress));
        return { success: true, xpGained };
    } catch (error) {
        console.error('Erro ao salvar progresso:', error);
        return { success: false, error };
    }
}

export function unlockNextModule(subjectName) {
    const allProgress = getAllProgress();
    const normalized = subjectName.toLowerCase().trim();

    if (!allProgress[normalized]) return { success: false };

    allProgress[normalized].currentModule += 1;
    allProgress[normalized].lastAccess = new Date().toISOString();

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(allProgress));
        return { success: true };
    } catch (error) {
        console.error('Erro ao desbloquear módulo:', error);
        return { success: false, error };
    }
}

// ===== LÓGICA DE DESBLOQUEIO =====

export function canAccessModule(subjectName, moduleId, totalModules) {
    // TODOS OS MÓDULOS SEMPRE LIBERADOS
    // Verifica apenas se módulo existe
    if (moduleId > totalModules) return false;

    return true; // ✅ Sempre desbloqueado!
}

export function getModuleStatus(subjectName, moduleId, totalModules) {
    if (isModuleCompleted(subjectName, moduleId)) {
        return 'completed'; // ✅ Verde
    }

    if (canAccessModule(subjectName, moduleId, totalModules)) {
        return 'available'; // 🔓 Azul
    }

    return 'locked'; // 🔒 Cinza
}

// ===== FUNÇÕES AUXILIARES =====

export function resetSubjectProgress(subjectName) {
    const allProgress = getAllProgress();
    const normalized = subjectName.toLowerCase().trim();

    delete allProgress[normalized];

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(allProgress));
        return { success: true };
    } catch (error) {
        console.error('Erro ao resetar progresso:', error);
        return { success: false, error };
    }
}

export function resetAllProgress() {
    try {
        localStorage.removeItem(STORAGE_KEY);
        return { success: true };
    } catch (error) {
        console.error('Erro ao resetar todo progresso:', error);
        return { success: false, error };
    }
}

export function getProgressSummary(subjectName) {
    const progress = getSubjectProgress(subjectName);
    const totalCompleted = progress.completedModules.length;

    return {
        currentModule: progress.currentModule,
        completedModules: totalCompleted,
        totalXP: progress.totalXP,
        lastAccess: progress.lastAccess,
        completedList: progress.completedModules
    };
}

export function getAllSubjectsProgress() {
    const allProgress = getAllProgress();
    const subjects = Object.keys(allProgress);

    return subjects.map(subject => ({
        subject,
        ...getProgressSummary(subject)
    }));
}
