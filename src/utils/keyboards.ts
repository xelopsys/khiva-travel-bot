import { session, Keyboard, InlineKeyboard } from "grammy";

const language_keyboard = new Keyboard()
	.text("UZB")
	.row()
	.text("RUS")
	.row()
	.text("ENG");

const questionsKeyboardUZ = new Keyboard()
	.text("Qanday qillib sug'urta sotib olaman?")
	.row()
	.text("GAI ni planshetida sug'urta ko'rinadimi?")
	.row()
	.text("Haydovchi qanday qo'shiladi?")
	.row()
	.text("Menga polis kelmadi")
	.row()
	.text("Firmaning mashinasini sug'urtalab bilamanmi?")
	.row()
	.text("Toshkent uchun faqat VIP sug'urta mavjudmi?")
	.row()
	.text("VIP sug'urtada qarindoshlarni qo'shish shartmi?")
	.row()
	.text("Sug'urta polisini qayerdan olaman?");

const jobs = new Keyboard()
	.text("Operator")
	.row()
	.text("Iqtisodchi")
	.row()
	.text("Buxgalter")
	.row()
	.text("Back to menu");

export { language_keyboard, questionsKeyboardUZ, jobs };
