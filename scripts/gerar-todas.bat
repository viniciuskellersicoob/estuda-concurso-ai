@echo off
chcp 65001 >nul
echo ========================================
echo 🤖 GERADOR MASSIVO DE QUESTÕES
echo ========================================
echo.
echo 📊 Total: 10 matérias × 50 questões = 500 questões
echo ⏱️  Tempo estimado: 20-30 minutos
echo.
echo Pressione qualquer tecla para iniciar...
pause >nul

echo.
echo ========================================
echo 1/10 - Português (50 questões)
echo ========================================
node generateQuestions.js portugues 50
if %errorlevel% neq 0 (
    echo ❌ Erro ao gerar Português
    pause
    exit /b 1
)
echo ✅ Português concluído!
timeout /t 10 /nobreak >nul

echo.
echo ========================================
echo 2/10 - Raciocínio Lógico (50 questões)
echo ========================================
node generateQuestions.js raciocinio 50
if %errorlevel% neq 0 (
    echo ❌ Erro ao gerar Raciocínio
    pause
    exit /b 1
)
echo ✅ Raciocínio concluído!
timeout /t 10 /nobreak >nul

echo.
echo ========================================
echo 3/10 - Informática (50 questões)
echo ========================================
node generateQuestions.js informatica 50
if %errorlevel% neq 0 (
    echo ❌ Erro ao gerar Informática
    pause
    exit /b 1
)
echo ✅ Informática concluído!
timeout /t 10 /nobreak >nul

echo.
echo ========================================
echo 4/10 - Direito Constitucional (50 questões)
echo ========================================
node generateQuestions.js constitucional 50
if %errorlevel% neq 0 (
    echo ❌ Erro ao gerar Constitucional
    pause
    exit /b 1
)
echo ✅ Constitucional concluído!
timeout /t 10 /nobreak >nul

echo.
echo ========================================
echo 5/10 - Direito Administrativo (50 questões)
echo ========================================
node generateQuestions.js administrativo 50
if %errorlevel% neq 0 (
    echo ❌ Erro ao gerar Administrativo
    pause
    exit /b 1
)
echo ✅ Administrativo concluído!
timeout /t 10 /nobreak >nul

echo.
echo ========================================
echo 6/10 - Direito Penal (50 questões)
echo ========================================
node generateQuestions.js penal 50
if %errorlevel% neq 0 (
    echo ❌ Erro ao gerar Penal
    pause
    exit /b 1
)
echo ✅ Penal concluído!
timeout /t 10 /nobreak >nul

echo.
echo ========================================
echo 7/10 - Direito Processual Penal (50 questões)
echo ========================================
node generateQuestions.js processual-penal 50
if %errorlevel% neq 0 (
    echo ❌ Erro ao gerar Processual Penal
    pause
    exit /b 1
)
echo ✅ Processual Penal concluído!
timeout /t 10 /nobreak >nul

echo.
echo ========================================
echo 8/10 - AFO (50 questões)
echo ========================================
node generateQuestions.js afo 50
if %errorlevel% neq 0 (
    echo ❌ Erro ao gerar AFO
    pause
    exit /b 1
)
echo ✅ AFO concluído!
timeout /t 10 /nobreak >nul

echo.
echo ========================================
echo 9/10 - Ética (50 questões)
echo ========================================
node generateQuestions.js etica 50
if %errorlevel% neq 0 (
    echo ❌ Erro ao gerar Ética
    pause
    exit /b 1
)
echo ✅ Ética concluído!
timeout /t 10 /nobreak >nul

echo.
echo ========================================
echo 10/10 - LEP (50 questões)
echo ========================================
node generateQuestions.js lep 50
if %errorlevel% neq 0 (
    echo ❌ Erro ao gerar LEP
    pause
    exit /b 1
)
echo ✅ LEP concluído!

echo.
echo ========================================
echo 🎉 GERAÇÃO CONCLUÍDA!
echo ========================================
echo.
echo ✅ 500 questões geradas em generated-questions/
echo.
echo 📋 PRÓXIMOS PASSOS:
echo 1. Abra a pasta generated-questions/
echo 2. Copie o conteúdo de cada arquivo
echo 3. Cole no final de src/data/questionBank.js
echo.
echo Pressione qualquer tecla para sair...
pause >nul
