export type Language = 'ko' | 'en';

export const t = {
    ko: {
        header: {
            title: "KERA-X",
            subtitle: "Clinic",
            restart: "재진단"
        },
        welcome: {
            title1: "과학이 만든",
            titleHighlight: "가상 가교",
            title2: "시술",
            desc: "고객님의 모발 상태를 분석하여 최적의 케라엑스 배합 비율과 이민결합(Imine Bond) 레시피를 처방합니다.",
            factTitle: "Science Fact",
            factDesc: "브라질리언 케라틴과 같은 일시적 '외부 코팅(Out-care)'이 아닙니다. 글리옥실산이 모발 내부의 세린과 결합하는 근본적인 '내부 구조 재건(Inner-care) 기술'을 경험하세요.",
            startBtn: "모발 나이 되돌리기 시작",
            langSelect: "언어 선택 (Language)"
        },
        assessment: {
            navPrev: "이전",
            damage: {
                title: "현재 모발의 손상도를 선택해주세요.",
                subtitle: "정확한 진단이 완벽한 가상 가교(Virtual Cross-linking)를 만듭니다.",
                options: [
                    { id: 'healthy', title: '건강모 / 약손상모', desc: '염색이나 펌 이력이 적은 비교적 건강한 모발' },
                    { id: 'damaged', title: '손상모', desc: '주기적인 화학 시술로 건조하고 푸석한 모발' },
                    { id: 'extreme', title: '극손상모 (탈색 2회 이상)', desc: '탄력이 없고 끊어지며 빗질이 어려운 모발' }
                ]
            },
            type: {
                title: "모발의 두께와 텍스처는 어떤가요?",
                subtitle: "연화/방치 시간 및 배합 비율을 결정하는 중요 요소입니다.",
                options: [
                    { id: 'thin', title: '가는 모발 (연모)', desc: '힘이 없고 볼륨이 쉽게 죽는 모발' },
                    { id: 'thick', title: '굵고 저항성 있는 모발 (경모)', desc: '시술제가 잘 먹지 않고 뻣뻣한 모발' },
                    { id: 'curly', title: '곱슬모', desc: '부스스하고 형태 교정이 필요한 모발' }
                ]
            },
            procedure: {
                title: "최근 3개월 내 주된 시술 이력은?",
                subtitle: "잔류 화학물질과 모발 구조 변화를 파악합니다.",
                options: [
                    { id: 'magic_perm', title: '매직 / 열펌', desc: '열로 인한 단백질 변성 및 건조함 내재' },
                    { id: 'dye', title: '염색 / 탈색', desc: '큐티클 손상 및 모발 내부 다공성 진행' },
                    { id: 'brazilian', title: '브라질리언 케라틴 / 신데렐라', desc: '외부 실리콘 코팅(아웃케어) 이력 있음' },
                    { id: 'none', title: '시술 이력 없음 (자연모)', desc: '화학적 이력이 없는 상태' }
                ]
            },
            concern: {
                title: "가장 해결하고 싶은 모발 고민은?",
                subtitle: "케라엑스의 핵심 타겟팅 효과를 설정합니다.",
                options: [
                    { id: 'elasticity', title: '탄력 저하 (노화모)', desc: '모발이 가늘어지고 힘없이 늘어짐' },
                    { id: 'frizz', title: '극도의 부스스함 (곱슬/손상)', desc: '매끄럽지 못하고 형태가 잡히지 않음' },
                    { id: 'breakage', title: '끊어짐 및 갈라짐', desc: '끝이 갈라지고 툭툭 끊기는 현상' }
                ]
            }
        },
        analysis: {
            analyzing: "AI 모발 구조 분석 중",
            finding: "글리옥실산 반응 표적을 찾고 있습니다",
            resultAgeLabel: "진단된 현재 모발 나이",
            resultAgeUnit: "세",
            resultDesc: "내부 단백질 유실 및 다공성 심각",
            btnNext: "맞춤형 회춘 레시피 확인"
        },
        recipe: {
            title: "맞춤형 케라엑스 처방전",
            subtitle: "손상도를 고려한 안전하고 효과적인 배합 비율입니다.",
            ratioTitle: "조제 비율 (케라엑스 1제 : 케라엑스 2제)",
            solvent: "케라엑스 1제 : 케라엑스 2제",
            brazilianWarning: "기존 외부 코팅(브라질리언) 이력이 있어, 큐티클을 부드럽게 열어주는 전처리 샴푸를 권장합니다.",
            timeTitle: "표준 공정 시간",
            heatLabel: "열처리 방치",
            heatVal: "(가온) ",
            naturalLabel: "자연 방치",
            pressLabel: "프레스 권장 온도",
            btnNext: "시술 튜토리얼 시작",
            waterTypes: {
                water: "",
                lpp: " (LPP 트리트먼트 혼합 권장)"
            },
            time15: "15분",
            time10: "10분"
        },
        execution: {
            title: "인터랙티브 시술 튜토리얼",
            subtitle: "각 단계의 체크리스트를 완료하며 가상 가교 결합을 완성하세요.",
            reaction: "+ H₂O 증발 (탈수축합 반응)",
            step1Title: "1. 도포 및 방치",
            step1Desc: (time: string) => `섹션을 나누어 얇게 도포 후 열처리 ${time}, 자연방치 10분을 진행합니다.`,
            step2Title: "2. 100% 완전 건조 (탈수축합 핵심!)",
            step2Desc: "수분이 0.1%도 남지 않게 바짝 건조해야 '이민결합'이 성공적으로 형성됩니다. 드라이 시 반드시 브러시를 사용하여 뼈대를 고정하세요.",
            step2Warning: "주의: 수분이 덜 마르면 프레스 시 열에 의한 단백질 변성(손상)이 발생할 수 있습니다!",
            step3Title: (temp: string) => `3. 프레스 작업 (${temp})`,
            step3Desc: "과도한 압력(프레스 꾹꾹 누르기)은 금물입니다. 텐션 브러시를 사용하여 부드럽게 결을 다듬듯 기기 온도를 전달하세요.",
            btnNext: "시술 완료 및 유지 관리 확인"
        },
        aftercare: {
            title: "시술이 완료되었습니다!",
            subtitle1: "현재 모발 나이가 ",
            subtitle2: " 로 회복되었습니다.",
            targetAge: "20세",
            managerTitle: "유지 관리 매니저",
            rules: [
                { title: "약산성 샴푸 필수:", desc: " pH 4.5~5.5 샴푸를 사용하여 열린 큐티클을 닫아주세요." },
                { title: "열 보호:", desc: " 드라이 전 오일 트리트먼트를 발라 윤기를 강화하세요." },
                { title: "알칼리 주의:", desc: " 시술 후 1주일간 수영장(염소) 방문을 자제하세요." }
            ],
            calendarTitle: "다음 재시술 권장일 (4주 후)",
            calendarDesc: "모발 상태에 따라 4~6주 주기로 이너케어를 반복하면 결합력이 배가됩니다.",
            days: ['일', '월', '화', '수', '목', '금', '토'],
            btnHome: "홈으로 돌아가기"
        }
    },
    en: {
        header: {
            title: "KERA-X",
            subtitle: "Clinic",
            restart: "Restart"
        },
        welcome: {
            title1: "Scientifically Proven",
            titleHighlight: "Virtual Cross-linking",
            title2: "Procedure",
            desc: "Analyzes your hair condition to prescribe the optimal Kera-X mixing ratio and Imine Bond recipe.",
            factTitle: "Science Fact",
            factDesc: "Not a temporary 'Out-care' coating like Brazilian Keratin. Experience the fundamental 'Inner-care technology' where glyoxylic acid binds with serine inside the hair.",
            startBtn: "Start Reversing Hair Age",
            langSelect: "Language Selection"
        },
        assessment: {
            navPrev: "Back",
            damage: {
                title: "Select current hair damage level.",
                subtitle: "Accurate diagnosis makes perfect Virtual Cross-linking.",
                options: [
                    { id: 'healthy', title: 'Healthy / Mild Damage', desc: 'Relatively healthy hair with little dyeing or perming history' },
                    { id: 'damaged', title: 'Damaged', desc: 'Dry and frizzy hair due to periodic chemical procedures' },
                    { id: 'extreme', title: 'Extreme Damage (Bleached 2x+)', desc: 'Hair lacking elasticity, breaking easily, and hard to comb' }
                ]
            },
            type: {
                title: "What is the thickness and texture of your hair?",
                subtitle: "An important factor determining softening time and mixing ratio.",
                options: [
                    { id: 'thin', title: 'Thin Hair (Soft)', desc: 'Weak hair that easily loses volume' },
                    { id: 'thick', title: 'Thick & Resistant Hair', desc: 'Stiff hair that resists chemical treatments' },
                    { id: 'curly', title: 'Curly / Frizzy Hair', desc: 'Frizzy hair needing shape correction' }
                ]
            },
            procedure: {
                title: "Main procedure history in the last 3 months?",
                subtitle: "Identifies residual chemicals and changes in hair structure.",
                options: [
                    { id: 'magic_perm', title: 'Magic Straight / Heat Perm', desc: 'Protein denaturation and dryness due to heat' },
                    { id: 'dye', title: 'Dyeing / Bleaching', desc: 'Cuticle damage and internal porosity progression' },
                    { id: 'brazilian', title: 'Brazilian Keratin / Cinderella', desc: 'History of external silicone coating (Out-care)' },
                    { id: 'none', title: 'No History (Virgin Hair)', desc: 'No chemical treatment history' }
                ]
            },
            concern: {
                title: "What is your main hair concern?",
                subtitle: "Sets the core targeting effect of Kera-X.",
                options: [
                    { id: 'elasticity', title: 'Loss of Elasticity (Aging)', desc: 'Hair becoming thin and weak' },
                    { id: 'frizz', title: 'Extreme Frizz (Curly/Damage)', desc: 'Rough texture and hard to hold shape' },
                    { id: 'breakage', title: 'Breakage & Split Ends', desc: 'Split ends and hair breaking off easily' }
                ]
            }
        },
        analysis: {
            analyzing: "AI Analyzing Hair Structure",
            finding: "Searching for glyoxylic acid reaction targets",
            resultAgeLabel: "Diagnosed Current Hair Age",
            resultAgeUnit: " yrs",
            resultDesc: "Severe internal protein loss and porosity",
            btnNext: "View Customized Rejuvenation Recipe"
        },
        recipe: {
            title: "Customized Kera-X Recipe",
            subtitle: "Safe and effective mixing ratio considering the damage level.",
            ratioTitle: "Mixing Ratio (Kera-X : Water)",
            solvent: "Diluent: ",
            brazilianWarning: "Due to previous external coating (Brazilian) history, a pre-treatment shampoo is recommended to gently open the cuticles.",
            timeTitle: "Standard Process Time",
            heatLabel: "Heat Treatment",
            heatVal: "(Heating) ",
            naturalLabel: "Natural Rest",
            pressLabel: "Recommended Press Temp",
            btnNext: "Start Procedure Tutorial",
            waterTypes: {
                water: "Purified Water",
                lpp: "LPP Treatment Mix Recommended"
            },
            time15: "15 mins",
            time10: "10 mins"
        },
        execution: {
            title: "Interactive Procedure Tutorial",
            subtitle: "Complete the checklist for each step to perfect the virtual cross-linking bond.",
            reaction: "+ H₂O Evap. (Dehydration Condensation)",
            step1Title: "1. Apply and Rest",
            step1Desc: (time: string) => `Divide into sections, apply thinly, then heat treat for ${time}, followed by 10 mins of natural rest.`,
            step2Title: "2. 100% Complete Drying (Dehydration Core!)",
            step2Desc: "Hair must be completely dried with 0.1% moisture left for 'Imine bonds' to form successfully. Always use a brush when blow-drying to fix the structure.",
            step2Warning: "Caution: If not fully dry, protein denaturation (damage) by heat may occur during pressing!",
            step3Title: (temp: string) => `3. Pressing Work (${temp})`,
            step3Desc: "Excessive pressure (pressing hard) is prohibited. Use a tension brush to gently smooth the texture while transferring tool heat.",
            btnNext: "Complete Procedure & View Aftercare"
        },
        aftercare: {
            title: "Procedure Completed!",
            subtitle1: "Current hair age has been restored to ",
            subtitle2: ".",
            targetAge: "20 yrs old",
            managerTitle: "After-Care Manager",
            rules: [
                { title: "Mild Acidic Shampoo Essential:", desc: " Use pH 4.5~5.5 shampoo to close opened cuticles." },
                { title: "Heat Protection:", desc: " Apply oil treatment before blow-drying to enhance shine." },
                { title: "Alkaline Caution:", desc: " Avoid visiting swimming pools (chlorine) for 1 week after procedure." }
            ],
            calendarTitle: "Next Recommended Date (After 4 Weeks)",
            calendarDesc: "Repeating the inner-care every 4~6 weeks depending on hair condition will multiply the bond strength.",
            days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            btnHome: "Return to Home"
        }
    }
};
