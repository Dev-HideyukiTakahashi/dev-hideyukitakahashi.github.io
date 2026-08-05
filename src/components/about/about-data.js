// ============================================================
// NOTNULL SYSTEMS
// PORTFÓLIO PESSOAL — HIDEYUKI TAKAHASHI
//
// Arquivo: about-data.js
// Responsabilidade:
// - Textos da seção Sobre
// - Informações profissionais
// - Dados reutilizáveis
// ============================================================

import { Building2, GraduationCap, MapPin } from 'lucide-react';

export const aboutParagraphs = [
  'Sou Hideyuki Takahashi, desenvolvedor Full Stack e fundador da NotNull Systems. Atuo na criação de produtos digitais modernos, funcionais e estruturados para acompanhar a evolução de cada projeto.',

  'Minha graduaçao em Análise e Desnvolvimento de Sistemas e MBA em Full Stack Development sustenta uma atuação orientada por arquitetura, qualidade e aprendizado contínuo, conectando tecnologia às necessidades reais de pessoas e negócios.',
];

export const aboutHighlights = [
  {
    id: 'location',
    icon: MapPin,
    label: 'Localização',
    value: 'Diadema, São Paulo',
  },
  {
    id: 'education',
    icon: GraduationCap,
    label: 'Formação',
    value: 'Análise de Sistemas e MBA',
  },
  {
    id: 'company',
    icon: Building2,
    label: 'Empresa',
    value: 'NotNull Systems',
  },
];
