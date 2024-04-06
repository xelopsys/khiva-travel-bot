"use strict";
// import bot from "../bot/bot";
// import { TypeBot } from "../types";
// import {
// 	menu,
// 	requestContact,
// 	gender,
// 	requestLocation,
// 	marriageStatus,
// 	adminMenu,
// } from "../utils/menu";
// import { jobs } from "../utils/keyboards";
// import { admins } from "../constants/constants";
// import { JSONtoXLSX, readXLSX } from "../xlsx";
// const personal = {
// 	data: {} as { [key: string]: string },
// 	setData: function (key: string, value: string | any) {
// 		this.data[key] = value;
// 	},
// 	getData: function (key: string) {
// 		return this.data[key];
// 	},
// };
// bot.hears(["📝 Ishlar"], async (ctx: TypeBot) => {
// 	await ctx.reply(ctx.t("jobs"), {
// 		reply_markup: { ...jobs, one_time_keyboard: true, resize_keyboard: true },
// 	});
// });
// bot.hears([/^\d{2}\.\d{2}\.\d{4}$/], async (ctx: TypeBot) => {
// 	personal.setData("birthday", ctx?.update?.message?.text!);
// 	ctx.session.step = 6;
// 	await ctx.reply(ctx.t("address"));
// });
// bot.hears(["Operator"], async (ctx: TypeBot) => {
// 	personal.setData("position", "Operator");
// 	ctx.session.step = 2;
// 	await ctx.reply(`Наши требования к кандидату:
// 	- Образование: среднее специальное
// 	- Хорошее владение узбекским и русским языками
// 	- Знание правил пользования измерительными приборами
// 	- Знание причины поломок оборудования и способы их устранения
// 	⠀
// 	✔️Ваши обязанности:
// 	- Производство и регулирование продукции на полуавтоматических и механизированных линиях
// 	- Проверка статуса взаимодействия узлов оборудования
// 	- Оповещать, отображать и устранять технические неисправности в работе оборудования
// 	- Расстановка узлов и механизмов в рабочем процессе`);
// 	await ctx.reply(ctx.t("chooseGender"), {
// 		reply_markup: { ...gender, one_time_keyboard: true, resize_keyboard: true },
// 	});
// });
// bot.hears(["Ayol", "Erkak"], async (ctx: TypeBot) => {
// 	personal.setData("gender", ctx?.update?.message?.text!);
// 	ctx.session.step = 3;
// 	await ctx.reply(ctx.t("contact"), {
// 		reply_markup: {
// 			...requestContact,
// 			one_time_keyboard: true,
// 			resize_keyboard: true,
// 		},
// 	});
// });
// bot.on("message:contact", async (ctx: TypeBot) => {
// 	personal.setData("contact", ctx?.update?.message?.contact?.phone_number!);
// 	ctx.session.step = 4;
// 	await ctx.reply(ctx.t("name"));
// });
// bot.on("message:location", async (ctx: TypeBot) => {
// 	personal.setData("location", ctx?.update?.message?.location!);
// 	ctx.session.step = 8;
// 	await ctx.reply(ctx.t("marriageStatus"), {
// 		reply_markup: {
// 			...marriageStatus,
// 			one_time_keyboard: true,
// 			resize_keyboard: true,
// 		},
// 	});
// });
// bot.hears(["Turmush qurmagan", "Uylangan"], async (ctx: TypeBot) => {
// 	console.log(ctx);
// 	personal.setData("marriageStatus", ctx?.update?.message?.text!);
// 	ctx.session.step = 9;
// 	await ctx.reply(ctx.t("knowledgeExperience"));
// });
// bot.hears(["Ha", "Yo`q"], async (ctx: TypeBot) => {
// 	if (ctx.session.step === 10) {
// 		personal.setData("isStudent", ctx?.update?.message?.text!);
// 		ctx.session.step = 11;
// 		await ctx.reply(ctx.t("degree"), {
// 			reply_markup: {
// 				keyboard: [[{ text: "Bakalavr" }, { text: "Magistratura" }]],
// 				one_time_keyboard: true,
// 				resize_keyboard: true,
// 			},
// 		});
// 	} else if (ctx.session.step === 18) {
// 		personal.setData("isReadyForKomandirovka", ctx?.update?.message?.text!);
// 		ctx.session.step = 19;
// 		await ctx.reply(ctx.t("salary"), {
// 			reply_markup: {
// 				keyboard: [[{ text: "2 000 000" }, { text: "3 000 000" }]],
// 				one_time_keyboard: true,
// 				resize_keyboard: true,
// 			},
// 		});
// 	}
// });
// bot.hears(["Bakalavr", "Magistratura"], async (ctx: TypeBot) => {
// 	personal.setData("degree", ctx?.update?.message?.text!);
// 	ctx.session.step = 12;
// 	await ctx.reply(ctx.t("facultyAndUniversity"));
// });
// bot.hears(["Kunduzgi", "Sirtqi", "Kechki"], async (ctx: TypeBot) => {
// 	personal.setData("shift", ctx?.update?.message?.text!);
// 	ctx.session.step = 14;
// 	await ctx.reply(ctx.t("uzbekKnowledge"), {
// 		reply_markup: {
// 			keyboard: [[{ text: "Boshlang`ich" }, { text: "O`rta" }]],
// 			one_time_keyboard: true,
// 			resize_keyboard: true,
// 		},
// 	});
// });
// bot.hears(["Boshlang`ich", "O`rta"], async (ctx: TypeBot) => {
// 	if (ctx.session.step === 14) {
// 		personal.setData("uzbekKnowledge", ctx?.update?.message?.text!);
// 		ctx.session.step = 15;
// 		await ctx.reply(ctx.t("russianKnowledge"), {
// 			reply_markup: {
// 				keyboard: [[{ text: "Boshlang`ich" }, { text: "O`rta" }]],
// 				one_time_keyboard: true,
// 				resize_keyboard: true,
// 			},
// 		});
// 	} else if (ctx.session.step === 15) {
// 		personal.setData("russianKnowledge", ctx?.update?.message?.text!);
// 		ctx.session.step = 16;
// 		await ctx.reply(ctx.t("computerKnowledge"), {
// 			reply_markup: {
// 				keyboard: [[{ text: "Boshlang`ich" }, { text: "O`rta" }]],
// 				one_time_keyboard: true,
// 				resize_keyboard: true,
// 			},
// 		});
// 	} else {
// 		personal.setData("computerKnowledge", ctx?.update?.message?.text!);
// 		ctx.session.step = 17;
// 		await ctx.reply(ctx.t("workExperience"));
// 	}
// });
// bot.hears(["2 000 000", "3 000 000"], async (ctx: TypeBot) => {
// 	personal.setData("salary", ctx?.update?.message?.text!);
// 	ctx.session.step = 20;
// 	await ctx.reply(ctx.t("photo"));
// });
// bot.on("message:photo", async (ctx: TypeBot) => {
// 	personal.setData("photo", ctx?.update?.message?.photo![0].file_id!);
// 	const data = readXLSX() || [];
// 	ctx.session.step = 21;
// 	console.log(ctx?.update);
// 	await ctx.reply(ctx.t("yourInformation"));
// 	const xlsx = JSONtoXLSX(
// 		[
// 			...data,
// 			{
// 				name: personal.getData("name"),
// 				contact: personal.getData("contact"),
// 				address: personal.getData("address"),
// 				marriageStatus: personal.getData("marriageStatus"),
// 				experience: personal.getData("experience"),
// 				isStudent: personal.getData("isStudent"),
// 				degree: personal.getData("degree"),
// 				faculty: personal.getData("faculty"),
// 				shift: personal.getData("shift"),
// 				uzbekKnowledge: personal.getData("uzbekKnowledge"),
// 				russianKnowledge: personal.getData("russianKnowledge"),
// 				computerKnowledge: personal.getData("computerKnowledge"),
// 				salary: personal.getData("salary"),
// 				photo: personal.getData("photo"),
// 			},
// 		],
// 		"SheetJS",
// 		"dist/sheet.xlsx"
// 	);
// 	await ctx.reply(
// 		`
// 		<b>${ctx.t("name")}:</b> ${personal.getData("name")}
// 		<b>${ctx.t("contact")}:</b> ${personal.getData("contact")}
// 		<b>${ctx.t("address")}:</b> ${personal.getData("address")}
// 		<b>${ctx.t("marriageStatus")}:</b> ${personal.getData("marriageStatus")}
// 		<b>${ctx.t("workExperience")}:</b> ${personal.getData("experience")}
// 		<b>${ctx.t("isStudent")}:</b> ${personal.getData("isStudent")}
// 		<b>${ctx.t("degree")}:</b> ${personal.getData("degree")}
// 		<b>${ctx.t("facultyAndUniversity")}:</b> ${personal.getData("faculty")}
// 		<b>${ctx.t("shift")}:</b> ${personal.getData("shift")}
// 		<b>${ctx.t("uzbekKnowledge")}:</b> ${personal.getData("uzbekKnowledge")}
// 		<b>${ctx.t("russianKnowledge")}:</b> ${personal.getData("russianKnowledge")}
// 		<b>${ctx.t("computerKnowledge")}:</b> ${personal.getData("computerKnowledge")}
// 		<b>${ctx.t("salary")}:</b> ${personal.getData("salary")}
// 		`,
// 		{
// 			parse_mode: "HTML",
// 		}
// 	);
// 	await ctx.replyWithPhoto(ctx?.update?.message?.photo![0].file_id!);
// 	if (xlsx) {
// 		await ctx.reply(ctx.t("saved"), {
// 			reply_markup: {
// 				...(admins.includes(ctx.update.message?.from?.id!) ? adminMenu : menu),
// 				one_time_keyboard: true,
// 				resize_keyboard: true,
// 			},
// 		});
// 	}
// });
// bot.on("message:text", async (ctx: TypeBot) => {
// 	if (
// 		ctx?.update?.message?.text?.match(/[\d{1}$]/) &&
// 		ctx?.session?.step === 5
// 	) {
// 		await ctx.reply(ctx.t("birthdayIncorrect"));
// 	} else if (ctx?.session?.step === 4) {
// 		personal.setData("name", ctx?.update?.message?.text!);
// 		ctx.session.step = 5;
// 		await ctx.reply(ctx.t("birthday"));
// 	} else if (ctx?.session?.step === 6) {
// 		personal.setData("address", ctx?.update?.message?.text!);
// 		ctx.session.step = 7;
// 		await ctx.reply(ctx.t("location"), {
// 			reply_markup: {
// 				...requestLocation,
// 				one_time_keyboard: true,
// 				resize_keyboard: true,
// 			},
// 		});
// 	} else if (ctx?.session?.step === 9) {
// 		personal.setData("experience", ctx?.update?.message?.text!);
// 		ctx.session.step = 10;
// 		await ctx.reply(ctx.t("isStudent"), {
// 			reply_markup: {
// 				keyboard: [[{ text: "Ha" }, { text: "Yo`q" }]],
// 				one_time_keyboard: true,
// 				resize_keyboard: true,
// 			},
// 		});
// 	} else if (ctx.session.step === 12) {
// 		personal.setData("faculty", ctx?.update?.message?.text!);
// 		ctx.session.step = 13;
// 		await ctx.reply(ctx.t("shift"), {
// 			reply_markup: {
// 				keyboard: [
// 					[{ text: "Kunduzgi" }, { text: "Sirtqi" }, { text: "Kechki" }],
// 				],
// 				one_time_keyboard: true,
// 				resize_keyboard: true,
// 			},
// 		});
// 	} else if (ctx.session.step === 17) {
// 		personal.setData("workExperience", ctx?.update?.message?.text!);
// 		ctx.session.step = 18;
// 		await ctx.reply(ctx.t("isReadyForKomandirovka"), {
// 			reply_markup: {
// 				keyboard: [[{ text: "Ha" }, { text: "Yo`q" }]],
// 				one_time_keyboard: true,
// 				resize_keyboard: true,
// 			},
// 		});
// 	}
// });
