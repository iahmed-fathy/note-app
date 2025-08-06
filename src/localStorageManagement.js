import getFormattedDate from "./getDate";

export let initialNotesData = [
  {
    id: "note-1",
    title: "ملاحظة مثبتة: أهلاً بك في تطبيق الملاحظات",
    author: "أحمد فتحي",
    date: getFormattedDate(),
    content:
      "هذه ملاحظة مثبتة لمساعدتك على البدء. يمكنك تثبيت ملاحظاتك المهمة في الأعلى لتسهيل الوصول إليها. جرّب إضافة ملاحظة جديدة الآن",
    isPinned: true,
  },
  {
    id: "note-2",
    title: "مهمة اليوم: شراء الأغراض",
    author: "أحمد فتحي",
    date: getFormattedDate(),
    content:
      "قائمة المشتريات:\n- خبز\n- حليب\n- قهوة\n- فواكه (تفاح وموز)\n- أرز",
    isPinned: false,
  },
  {
    id: "note-3",
    title: "فكرة مشروع جديد",
    author: "أحمد فتحي",
    date: getFormattedDate(),
    content:
      "تطوير تطبيق لإدارة المهام مع ميزة تذكير. يجب أن يكون التصميم بسيطًا ومناسبًا للاستخدام على الهاتف المحمول.",
    isPinned: false,
  },
];
export function saveData(data) {
  localStorage.setItem("notesAppData", JSON.stringify(data));
}

export function getData() {
  const savedData = localStorage.getItem("notesAppData");
  return savedData ? JSON.parse(savedData) : initialNotesData;
}
