module.exports = {
 config: {
	 name: "pompom1",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "pom pom") {
 return message.reply({
 body: "     「 🌸🦋শালা লুচ্চা এগুলো না দেখি , পড়তে বস।\n বেয়াদব এখনো ভিডিও দেখতেছে\n মোবাইল টিপা বন্ধ করে , পড়তে বস \n\n\n 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆𝐀𝐁𝐇𝐑𝐀𝐍𝐈𝐋☆\n\nᑘᒪᒪᗩSᕼ ッ」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/MWDt6t1.mp4")
 });
 }
 }
}
