/**
 * Módulo unificado de IA
 * Suporta: Groq + Gemini Free (ambos funcionam do navegador!)
 */

import { isGroqConfigured } from '../config/groq';
import { isGeminiConfigured } from '../config/gemini';
import * as groq from './groqService';
import * as gemini from './geminiService';

/**
 * Determina qual provider usar
 * PRIORIDADE: Groq > Gemini > Nenhum
 */
function getProvider() {
    const envProvider = import.meta.env.VITE_AI_PROVIDER;

    // Se usuário forçou um provider específico
    if (envProvider === 'groq' && isGroqConfigured()) {
        return 'groq';
    }
    if (envProvider === 'gemini' && isGeminiConfigured()) {
        return 'gemini';
    }

    // PADRÃO: Groq primeiro, depois Gemini
    if (isGroqConfigured()) {
        return 'groq';
    }

    if (isGeminiConfigured()) {
        return 'gemini';
    }

    return null;
}

/**
 * Testa conexão com o provider configurado
 */
export async function testAIConnection() {
    const provider = getProvider();

    if (!provider) {
        return {
            success: false,
            message: 'Nenhum provider de IA configurado. Configure Groq ou Gemini no .env',
            provider: null,
        };
    }

    let result;
    switch (provider) {
        case 'groq':
            result = await groq.testGroqConnection();
            break;
        case 'gemini':
            result = await gemini.testGeminiConnection();
            break;
        default:
            return {
                success: false,
                message: 'Provider desconhecido',
                provider: null,
            };
    }

    return {
        ...result,
        provider,
    };
}

/**
 * Gera explicação usando provider configurado
 */
export async function generateExplanation(question, correctAnswer) {
    const provider = getProvider();

    if (!provider) {
        throw new Error('Nenhum provider de IA configurado. Configure Groq ou Gemini no .env');
    }

    switch (provider) {
        case 'groq':
            return await groq.generateExplanation(question, correctAnswer);
        case 'gemini':
            return await gemini.generateExplanation(question, correctAnswer);
        default:
            throw new Error('Provider desconhecido');
    }
}

/**
 * Gera questão usando provider configurado
 */
export async function generateQuestion(subject, topic, exam) {
    const provider = getProvider();

    if (!provider) {
        throw new Error('Nenhum provider de IA configurado. Configure Groq ou Gemini no .env');
    }

    switch (provider) {
        case 'groq':
            return await groq.generateQuestion(subject, topic, exam);
        case 'gemini':
            return await gemini.generateQuestion(subject, topic, exam);
        default:
            throw new Error('Provider desconhecido');
    }
}

/**
 * Gera dica de estudo usando provider configurado
 */
export async function generateStudyTip(wrongTopics) {
    const provider = getProvider();

    if (!provider) {
        throw new Error('Nenhum provider de IA configurado. Configure Groq ou Gemini no .env');
    }

    switch (provider) {
        case 'groq':
            return await groq.generateStudyTip(wrongTopics);
        case 'gemini':
            return await gemini.generateStudyTip(wrongTopics);
        default:
            throw new Error('Provider desconhecido');
    }
}

/**
 * Retorna nome do provider atual
 */
export function getCurrentProvider() {
    return getProvider();
}

/**
 * Verifica se algum provider está configurado
 */
export function isAIConfigured() {
    return getProvider() !== null;
}
