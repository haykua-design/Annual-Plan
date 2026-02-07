export const annualGoals = {
    "A": {
        id: "A",
        title: "副业 IP / AI App",
        subtitle: "Side Hustle",
        color: "bg-orange-100 text-orange-800",
        description: "到 2026 年底，我能稳定输出被需要的内容或产品，并跑通一条真实可复制的副业变现路径。"
    },
    "B": {
        id: "B",
        title: "理财学习",
        subtitle: "Finance",
        color: "bg-emerald-100 text-emerald-800",
        description: "到 2026 年底，我具备独立做资产配置与风险管理决策的能力，不再靠情绪进出市场。"
    },
    "C": {
        id: "C",
        title: "身体 (游泳)",
        subtitle: "Body",
        color: "bg-blue-100 text-blue-800",
        description: "到 2026 年底，我具备稳定支撑高强度工作与旅行的体能，不再被疲惫拖垮节奏。"
    },
    "D": {
        id: "D",
        title: "潜水 & 海洋创作",
        subtitle: "Diving",
        color: "bg-cyan-100 text-cyan-800",
        description: "到 2026 年底，我从“下海看热闹”进化为“有目的地观察海洋世界”，并形成稳定的海洋创作母题。"
    }
};

export const yearData = {
    "2026-01": {
        id: "2026-01",
        monthName: "January",
        theme: "准备月",
        shortTheme: "Prep Month",
        status: "completed",
        review: {
            summary: "An incredible start to the year. You didn't just plan; you acted.",
            text: "You secured your OW certification in Bohol, logging 7 dives and encountering Clownfish, Turtles, Lionfish, and even Baby Sharks. On land, you disciplined yourself with 8 swim sessions and produced 5 oil pastel studies.",
            advice: "For February, carry this aquatic momentum into Lanta. Don't let the travel disrupt your creative flow—try to sketch on the plane or boat."
        },
        tracks: {
            "A": {
                id: "A",
                title: "副业 IP",
                subtitle: "Side Hustle",
                color: "bg-orange-100 text-orange-800",
                items: []
            },
            "B": {
                id: "B",
                title: "理财学习",
                subtitle: "Finance",
                color: "bg-emerald-100 text-emerald-800",
                items: []
            },
            "C": {
                id: "C",
                title: "身体 (游泳)",
                subtitle: "Body",
                color: "bg-blue-100 text-blue-800",
                items: [
                    { id: "c1", text: "Swimming Sessions", type: "counter", current: 8, target: 8, unit: "次" }
                ]
            },
            "D": {
                id: "D",
                title: "潜水 & 海洋",
                subtitle: "Diving",
                color: "bg-cyan-100 text-cyan-800",
                items: [
                    { id: "d1", text: "Bohol OW Certification", type: "check", completed: true },
                    { id: "d2", text: "Dives Logged", type: "counter", current: 7, target: 7, unit: "dives" },
                    { id: "d3", text: "Oil Pastel Studies", type: "counter", current: 5, target: 5, unit: "paintings" }
                ]
            }
        }
    },
    "2026-02": {
        id: "2026-02",
        monthName: "February",
        theme: "兰塔岛实战月",
        shortTheme: "Lanta Island",
        status: "active", // active, locked, completed
        tracks: {
            "A": {
                id: "A",
                title: "副业 IP",
                subtitle: "Side Hustle",
                color: "bg-orange-100 text-orange-800",
                items: [
                    { id: "a1", text: "明确小红书 IP 定位 + 3 个固定栏目", type: "check", completed: false },
                    { id: "a2", text: "发 1 篇启动帖", type: "check", completed: false },
                    { id: "a3", text: "兰塔岛回来发 1 篇潜水主题内容", type: "check", completed: false },
                    { id: "a4", text: "AI 小程序写清 MVP 一句话 + 低保真草图", type: "check", completed: false }
                ]
            },
            "B": {
                id: "B",
                title: "理财学习",
                subtitle: "Finance",
                color: "bg-emerald-100 text-emerald-800",
                items: [
                    { id: "b1", text: "办好香港银行卡", type: "check", completed: false },
                    { id: "b2", text: "学 3 个基础概念（资产配置 / 回撤 / 指数基金）", type: "check", completed: false },
                    { id: "b3", text: "建立投资日志模板", type: "check", completed: false },
                    { id: "b4", text: "记录兰塔岛旅行开销，做一次消费复盘", type: "check", completed: false }
                ]
            },
            "C": {
                id: "C",
                title: "身体 (游泳)",
                subtitle: "Body",
                color: "bg-blue-100 text-blue-800",
                items: [
                    { id: "c1", text: "游泳", type: "counter", current: 0, target: 6, unit: "次" },
                    { id: "c2", text: "潜水期间记录一次体能短板", type: "check", completed: false }
                ]
            },
            "D": {
                id: "D",
                title: "潜水 & 海洋",
                subtitle: "Diving",
                color: "bg-cyan-100 text-cyan-800",
                items: [
                    { id: "d1", text: "兰塔岛潜水", type: "counter", current: 0, target: 2, unit: "潜" },
                    { id: "d2", text: "识别新生物", type: "counter", current: 0, target: 5, unit: "种" },
                    { id: "d3", text: "记录 1 个技术进步点（浮力 / 呼吸 / 踢法）", type: "check", completed: false },
                    { id: "d4", text: "回来画 1 张海洋主题速写", type: "check", completed: false }
                ]
            }
        }
    },
    "2026-03": {
        id: "2026-03",
        monthName: "March",
        theme: "复盘 + 稳定输出月",
        shortTheme: "Review & Output",
        status: "locked",
        tracks: {}
    },
    "2026-04": { id: "2026-04", monthName: "April", theme: "产品雏形月", status: "locked", tracks: {} },
    "2026-05": { id: "2026-05", monthName: "May", theme: "吉利岛升级月", status: "locked", tracks: {} },
    "2026-06": { id: "2026-06", monthName: "June", theme: "第一次变现尝试月", status: "locked", tracks: {} },
    "2026-07": { id: "2026-07", monthName: "July", theme: "系统化输出月", status: "locked", tracks: {} },
    "2026-08": { id: "2026-08", monthName: "August", theme: "创作强化月", status: "locked", tracks: {} },
    "2026-09": { id: "2026-09", monthName: "September", theme: "红海冲刺准备月", status: "locked", tracks: {} },
    "2026-10": { id: "2026-10", monthName: "October", theme: "红海 AOW 爆发月", status: "locked", tracks: {} },
    "2026-11": { id: "2026-11", monthName: "November", theme: "资产沉淀月", status: "locked", tracks: {} },
    "2026-12": { id: "2026-12", monthName: "December", theme: "年度复盘月", status: "locked", tracks: {} }
};
