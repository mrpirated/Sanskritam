require('../config/db')
const express = require("express");
const router = express.Router();
const WordModel = require("../models/words.js")
const SentModel = require("../models/sentence.js")

function insertword(){
  var word = new WordModel({
        word:"वयम्",
        split: ["व","य","म्"],
        hint:"We"
  })
  word.save()
}
function insertsent(){
  const newSent = new SentModel({
        sentence:"अहं वदामि",
        split:["अहं","वदामि"],
        meaning:"I say"
    })
    newSent.save()
}

function insertOtherWords() {
  WordModel.insertMany( [
    {
      word: "अहम्",
      split: ["अ","ह","म्"],
      hint: "I"
    },
    {
      word: "त्वम्",
      split: ["त्व","म्"],
      hint: "You"
    },{
      word: "यूयम्",
      split: ["यू", "य","म्"],
      hint: "You"
    },{
      word: "इदम्",
      split: ["इ","द","म्"],
      hint: "this"
    },{
      word: "तत्",
      split: ["त","त्"],
      hint: "I"
    },{
      word: "अत्र",
      split: ["अ","त्र"],
      hint: "here"
    },{
      word: "तत्र",
      split: ["त", "त्र"],
      hint: "there"
    },{
      word: "किम्",
      split: ["कि", "म्"],
      hint: "I"
    },{
      word: "कुत्र",
      split: ["कु", "त्र"],
      hint: "where"
    },{
      word: "कदा",
      split: ["क", "दा"],
      hint: "when"
    },{
      word: "कथम्",
      split: ["क", "थ","म्"],
      hint: "how"
    },{
      word: "सर्व",
      split: ["स","र्व"],
      hint: "all"
    },{
      word: "बहु",
      split: ["ब","हु"],
      hint: "many"
    },{
      word: "किञ्चिद्",
      split: ["कि","ञ्चि","द्"],
      hint: "some"
    },{
      word: "अल्प",
      split: ["अ", "ल्प"],
      hint: "few"
    },{
      word: "अन्य",
      split: ["अ","न्य"],
      hint: "other"
    },{
      word: "एक",
      split: ["ए", "क"],
      hint: "one"
    },{
      word: "चतुर्",
      split: ["च","तु","र्"],
      hint: "four"
    },{
      word: "पञ्चन्",
      split: ["प","ञ्च","न्"],
      hint: "five"
    },{
      word: "महत्",
      split: ["म","ह","त्"],
      hint: "big"
    },{
      word: "दीर्घ",
      split: ["दी","र्घ"],
      hint: "long"
    },{
      word: "उरु",
      split: ["उ","रु"],
      hint: "wide"
    },{
      word: "घन",
      split: ["घ","न"],
      hint: "thick"
    },{
      word: "गुरु",
      split: ["गु","रु"],
      hint: "heavy"
    },{
      word: "अल्प",
      split: ["अ","ल्प"],
      hint: "small"
    },{
      word: "ह्रस्व",
      split: ["ह्र","स्व"],
      hint: "short"
    },{
      word: "अंहु",
      split: ["अं","हु"],
      hint: "narrow"
    },{
      word: "तनु",
      split: ["त","नु"],
      hint: "thin"
    },{
      word: "पुरुष",
      split: ["पु","रु","ष"],
      hint: "man"
    },{
      word: "मनुष्य",
      split: ["म","नु","ष्य"],
      hint: "human being"
    },{
      word: "शिशु",
      split: ["शि","शु"],
      hint: "child"
    },{
      word: "wife",
      split: ["प","त्नी"],
      hint: "I"
    },{
      word: "husband",
      split: ["प","ति"],
      hint: "I"
    },{
      word: "मातृ",
      split: ["मा","तृ"],
      hint: "mother"
    },{
      word: "पितृ",
      split: ["पि","तृ"],
      hint: "father"
    },{
      word: "पशु",
      split: ["प","शु"],
      hint: "animal"
    },{
      word: "मत्स्य",
      split: ["म","त्स्य"],
      hint: "fish"
    },{
      word: "पक्षिन्",
      split: ["प","क्षि","न्"],
      hint: "bird"
    },{
      word: "श्वन्",
      split: ["श्व","न्"],
      hint: "dog"
    },{
      word: "यूका",
      split: ["यू","का"],
      hint: "louse"
    },{
      word: "सर्प",
      split: ["स","र्प"],
      hint: "snake"
    },{
      word: "कृमि",
      split: ["कृ","मि"],
      hint: "worm"
    },{
      word: "वृक्ष",
      split: ["वृ","क्ष"],
      hint: "tree"
    },{
      word: "वन",
      split: ["व","न"],
      hint: "forest"
    },{
      word: "दण्ड",
      split: ["द","ण्ड"],
      hint: "stick"
    },{
      word: "फल",
      split: ["फ","ल"],
      hint: "fruit"
    },{
      word: "बीज",
      split: ["बी","ज"],
      hint: "seed"
    },{
      word: "पत्त्र",
      split: ["प","त्त्र"],
      hint: "leaf"
    },{
      word: "मूल",
      split: ["मू","ल"],
      hint: "root"
    },{
      word: "त्वच्",
      split: ["त्व","च्"],
      hint: "bark"
    },{
      word: "पुष्प",
      split: ["पु","ष्प"],
      hint: "flower"
    },{
      word: "तृण",
      split: ["तृ","ण"],
      hint: "grass"
    },{
      word: "रज्जु",
      split: ["र","ज्जु"],
      hint: "rope"
    },{
      word: "चर्मन्",
      split: ["च","र्म","न्"],
      hint: "skin"
    },{
      word: "मांस",
      split: ["मां","स"],
      hint: "meat"
    },{
      word: "रक्त",
      split: ["र","क्त"],
      hint: "blood"
    },{
      word: "अस्थि",
      split: ["अ","स्थि"],
      hint: "bone"
    },{
      word: "पीवस्",
      split: ["पी","व","स्"],
      hint: "fat"
    },{
      word: "अण्ड",
      split: ["अ","ण्ड"],
      hint: "egg"
    },{
      word: "शृङ्ग",
      split: ["शृ","ङ्ग"],
      hint: "horn"
    },{
      word: "पुच्छ",
      split: ["पु","च्छ"],
      hint: "tail"
    },{
      word: "पर्ण",
      split: ["प","र्ण"],
      hint: "feather"
    },{
      word: "केश",
      split: ["के","श"],
      hint: "hair"
    },{
      word: "शिरस्",
      split: ["शि","र","स्"],
      hint: "head"
    },{
      word: "कर्ण",
      split: ["क","र्ण"],
      hint: "ear"
    },{
      word: "अक्षि",
      split: ["अ","क्षि"],
      hint: "eye"
    },{
      word: "नासा",
      split: ["ना","सा"],
      hint: "nose"
    },{
      word: "वक्त्र",
      split: ["व","क्त्र"],
      hint: "mouth"
    },{
      word: "दन्त",
      split: ["द","न्त"],
      hint: "tooth"
    },{
      word: "जिह्वा",
      split: ["जि","ह्वा "],
      hint: "tongue"
    },{
      word: "नख",
      split: ["न","ख"],
      hint: "fingernail"
    },{
      word: "पद",
      split: ["प","द"],
      hint: "foot"
    },{
      word: "जङ्घ",
      split: ["ज","ङ्घ"],
      hint: "leg"
    },{
      word: "जानु",
      split: ["जा","नु"],
      hint: "knee"
    },{
      word: "हस्त",
      split: ["ह","स्त"],
      hint: "hand"
    },{
      word: "पक्ष",
      split: ["प","क्ष"],
      hint: "wing"
    },{
      word: "उदर",
      split: ["उ","द","र"],
      hint: "belly"
    },{
      word: "अन्त्र",
      split: ["अ","न्त्र"],
      hint: "guts"
    },{
      word: "गल",
      split: ["ग","ल"],
      hint: "neck"
    },{
      word: "पृष्ठ",
      split: ["पृ","ष्ठ"],
      hint: "back"
    },{
      word: "हृदय",
      split: ["हृ","द","य"],
      hint: "heart"
    },{
      word: "यकृत्",
      split: ["य","कृ","त्"],
      hint: "liver"
    },{
      word: "पिबति",
      split: ["पि","ब","ति"],
      hint: "to drink"
    },{
      word: "खादति",
      split: ["खा","द","ति"],
      hint: "to eat"
    },{
      word: "दशति",
      split: ["द","श","ति"],
      hint: "to bite"
    },{
      word: "धयति",
      split: ["ध","य","ति"],
      hint: "to suck"
    },{
      word: "ष्ठीवति",
      split: ["ष्ठी","व","ति"],
      hint: "to spit"
    },{
      word: "वमति",
      split: ["व","म","ति"],
      hint: "to vomit"
    },{
      word: "वाति",
      split: ["वा","ति"],
      hint: "to blow"
    },{
      word: "अनिति",
      split: ["अ","नि","ति"],
      hint: "to breathe"
    },{
      word: "स्मयते",
      split: ["स्म","य","ते"],
      hint: "to laugh"
    },{
      word: "पश्यति",
      split: ["प","श्य","ति"],
      hint: "to see"
    },{
      word: "शृणोति",
      split: ["शृ","णो","ति"],
      hint: "to hear"
    },{
      word: "जानाति",
      split: ["जा","ना","ति"],
      hint: "to know"
    },{
      word: "मन्यते",
      split: ["म","न्य","ते"],
      hint: "to think"
    },{
      word: "जिघ्रति",
      split: ["जि","घ्र","ति"],
      hint: "to smell"
    },{
      word: "बिभेति",
      split: ["बि","भे","ति"],
      hint: "to fear"
    },{
      word: "स्वपिति",
      split: ["स्व","पि","ति"],
      hint: "to sleep"
    },{
      word: "जीवति",
      split: ["जी","व","ति"],
      hint: "to live"
    },{
      word: "म्रियते",
      split: ["म्रि","य","ते"],
      hint: "to die"
    },{
      word: "हन्ति",
      split: ["ह","न्ति"],
      hint: "to kill"
    },{
      word: "युध्यते",
      split: ["यु","ध्य","ते"],
      hint: "to fight"
    },{
      word: "वेति",
      split: ["वे","ति"],
      hint: "to hunt"
    },{
      word: "ताडयति",
      split: ["ता","ड","य","ति"],
      hint: "to hit"
    },{
      word: "कृन्तति",
      split: ["कृ","न्त","ति"],
      hint: "to cut"
    },{
      word: "भिनत्ति",
      split: ["भि","न","त्ति"],
      hint: "to split"
    },{
      word: "विधति",
      split: ["वि","ध","ति"],
      hint: "to stab"
    },{
      word: "लिखति",
      split: ["लि","ख","ति"],
      hint: "to scratch"
    },{
      word: "खनति",
      split: ["ख","न","ति"],
      hint: "to dig"
    },{
      word: "प्लवते",
      split: ["प्ल","व","ते"],
      hint: "to swim"
    },{
      word: "पतति",
      split: ["प","त","ति"],
      hint: "to fly"
    },{
      word: "गच्छति",
      split: ["ग","च्छ","ति"],
      hint: "to walk"
    },{
      word: "आगच्छति",
      split: ["आ","ग","च्छ","ति"],
      hint: "to come"
    },{
      word: "शेते",
      split: ["शे","ते"],
      hint: "to lie"
    },{
      word: "सीदति",
      split: ["सी","द","ति"],
      hint: "to sit"
    },{
      word: "तिष्ठति",
      split: ["ति","ष्ठ","ति"],
      hint: "to stand"
    },{
      word: "पद्यते",
      split: ["प","द्य","ते"],
      hint: "to fall"
    },{
      word: "ददाति",
      split: ["द","दा","ति"],
      hint: "to give"
    },{
      word: "धरति",
      split: ["ध","र","ति"],
      hint: "to hold"
    },{
      word: "मृद्नाति",
      split: ["मृ","द्ना","ति"],
      hint: "to squeeze"
    },{
      word: "घर्षति",
      split: ["घ","र्ष","ति"],
      hint: "to rub"
    },{
      word: "क्षालयति",
      split: ["क्षा","ल","य","ति"],
      hint: "to wash"
    },{
      word: "मार्ष्टि",
      split: ["मा","र्ष्टि"],
      hint: "to wipe"
    },{
      word: "कर्षति",
      split: ["क","र्ष","ति"],
      hint: "to pull"
    },{
      word: "नुदति",
      split: ["नु","द","ति"],
      hint: "to push"
    },{
      word: "क्षिपति",
      split: ["क्षि","प","ति"],
      hint: "to throw"
    },{
      word: "बध्नाति",
      split: ["ब","ध्ना","ति"],
      hint: "to tie"
    },{
      word: "सीव्यति",
      split: ["सी","व्य","ति"],
      hint: "to sew"
    },{
      word: "गणयति",
      split: ["ग","ण","य","ति"],
      hint: "to count"
    },{
      word: "वक्ति",
      split: ["व","क्ति"],
      hint: "to say"
    },{
      word: "गायति",
      split: ["गा","य","ति"],
      hint: "to sing"
    },{
      word: "दीव्यति",
      split: ["दी","व्य","ति"],
      hint: "to play"
    },{
      word: "प्लवते",
      split: ["प्ल","व","ते"],
      hint: "to float"
    },{
      word: "सरति",
      split: ["स","र","ति"],
      hint: "to flow"
    },{
      word: "शीयते",
      split: ["शी","य","ते"],
      hint: "to freez"
    },{
      word: "श्वयति",
      split: ["श्व","य","ति"],
      hint: "to swell"
    },{
      word: "सूर्य",
      split: ["सू","र्य"],
      hint: "sun"
    },{
      word: "चन्द्रमस्",
      split: ["च","न्द्र","म","स्"],
      hint: "moon"
    },{
      word: "नक्षत्र",
      split: ["न","क्ष","त्र"],
      hint: "star"
    },{
      word: "पानीय",
      split: ["पा","नी","य"],
      hint: "water"
    },{
      word: "सरस्",
      split: ["स","र","स्"],
      hint: "lake"
    },{
      word: "समुद्र",
      split: ["स","मु","द्र"],
      hint: "sea"
    },{
      word: "लवण",
      split: ["ल","व","ण"],
      hint: "salt"
    },{
      word: "अश्मन्",
      split: ["अ","श्म","न्"],
      hint: "stone"
    },{
      word: "गायति",
      split: ["गा","य","ति"],
      hint: "to sing"
    },{
      word: "शिकता",
      split: ["शि","क","ता"],
      hint: "sand"
    },{
      word: "रेणु",
      split: ["रे","णु"],
      hint: "dust"
    },{
      word: "नभस्",
      split: ["न","भ","स्"],
      hint: "cloud"
    },{
      word: "आकाश",
      split: ["आ","का","श"],
      hint: "sky"
    },{
      word: "तुषार",
      split: ["तु","षा","र"],
      hint: "snow"
    },{
      word: "अग्नि",
      split: ["अ","ग्नि"],
      hint: "fire"
    },{
      word: "दहति",
      split: ["द","ह","ति"],
      hint: "to burn"
    },{
      word: "अध्वन्",
      split: ["अ","ध्व","न्"],
      hint: "road"
    },{
      word: "रोहित",
      split: ["रो","हि","त"],
      hint: "red"
    },{
      word: "हरित",
      split: ["ह","रि","त"],
      hint: "green"
    },{
      word: "पीतल",
      split: ["पी","त","ल"],
      hint: "yellow"
    },{
      word: "श्वेत",
      split: ["श्वे","त"],
      hint: "white"
    },{
      word: "रात्रि",
      split: ["रा","त्रि"],
      hint: "mountain"
    },{
      word: "दिवस",
      split: ["दि","व","स"],
      hint: "day"
    },{
      word: "संवत्सर",
      split: ["सं","व","त्स","र"],
      hint: "year"
    },{
      word: "तप्त",
      split: ["त","प्त"],
      hint: "warm"
    },{
      word: "शीत",
      split: ["शी","त"],
      hint: "cold"
    },{
      word: "पूर्ण",
      split: ["पू","र्ण"],
      hint: "full"
    },{
      word: "नूतन",
      split: ["नू","त","न"],
      hint: "new"
    },{
      word: "पुरातन",
      split: ["पु","रा","त","न"],
      hint: "old"
    },{
      word: "मलिन",
      split: ["म","लि","न"],
      hint: "dirty"
    },{
      word: "वर्तुल",
      split: ["व","र्तु","ल"],
      hint: "round"
    },{
      word: "तीक्ष्ण",
      split: ["ती","क्ष्ण"],
      hint: "sharp"
    },{
      word: "कुण्ठ",
      split: ["कु","ण्ठ"],
      hint: "dull"
    },{
      word: "स्निग्ध",
      split: ["स्नि","ग्ध"],
      hint: "smooth"
    },{
      word: "क्लिन्न",
      split: ["क्लि","न्न"],
      hint: "wet"
    },{
      word: "दक्षिण",
      split: ["द","क्षि","ण"],
      hint: "right"
    }
   ] );
}

function insertOtherSentences() {
  SentModel.insertMany([
    {
      sentence: "सीता क्रीडति|",
      split: ["सीता", "क्रीडति", "|"],
      meaning: "Seeta plays."
    },{
      sentence: "त्वं क्रीडसि|",
      split: ["त्वं", "क्रीडसि", "|"],
      meaning: "you play."
    },{
      sentence: "त्वं वदसि|",
      split: ["त्वं" ,"वदसि", "|"],
      meaning: "You say."
    },{
      sentence: "त्वम् उपविशसि|",
      split: ["त्वम्", "उपविशसि", "|"],
      meaning: "You sit."
    },{
      sentence: "सीता कदा पठति?",
      split: ["सीता", "कदा","पठति", "?"],
      meaning: "When does Seeta read?"
    },{
      sentence: "ताः कदा क्रीडन्ति?",
      split: ["ताः","कदा", "क्रीडन्ति?", "?"],
      meaning: "When do they play?"
    },{
      sentence: "अहं कदा लिखामि?",
      split: ["अहं", "कदा", "लिखामि?", "?"],
      meaning: "When do I write?"
    },{
      sentence: "त्वं कदा गच्छसि?",
      split: ["सीता", "क्रीडति", "?"],
      meaning: "When do you go?"
    },{
      sentence: "भवान् कदा उत्तिष्ठति?",
      split: ["भवान्", "कदा", "उत्तिष्ठति", "?"],
      meaning: "When do you get up?"
    },{
      sentence: "भवत्याः नर्तनं कदा अस्ति?",
      split: ["भवत्याः", "नर्तनं", "कदा", "अस्ति","?"],
      meaning: "When is your dance?"
    },{
      sentence: "सः कदा लिखति?",
      split: ["सः", "कदा", "लिखति", "?"],
      meaning: "When does he write?"
    },{
      sentence: "हरेः पत्नी लक्ष्मीः।",
      split: ["हरेः", "पत्नी", "लक्ष्मीः", "।"],
      meaning: "Lakshmi is the wife of Hari."
    },{
      sentence: "साध्वोः शीघ्रं मैत्री भवति।",
      split: ["साध्वोः", "शीघ्रं", "मैत्री", "भवति", "।"],
      meaning: "Good people become friends quickly."
    },{
      sentence: "गिर्योः मध्ये सूर्योदयः शोभते।",
      split: ["गिर्योः", "मध्ये", "सूर्योदयः", "शोभते", "।"],
      meaning: "The sun looks beautiful (nice) between the two hills."
    },{
      sentence: "साधूनां दर्शनं पुण्यम्।",
      split: ["साधूनां", "दर्शनं", "पुण्यम्", "।"],
      meaning: "Seeing the saints is meritorious."
    },{
      sentence: "आपत्काले बुद्धेः परीक्षा भवति।",
      split: ["आपत्काले", "बुद्धेः", "परीक्षा", "भवति", "।"],
      meaning: "The test of intellect is during an emergency/trouble.."
    },{
      sentence: "तत्र द्वयोः पङ्क्त्योः मध्ये स्थानं नास्ति।",
      split: ["तत्र", "द्वयोः", "पङ्क्त्योः", "मध्ये", "स्थानं", "नास्ति", "।"],
      meaning: "There is no place between the two lines."
    },{
      sentence: "तत्र धेनूनां समूहः तिष्ठति।",
      split: ["तत्र", "धेनूनां", "समूहः", "तिष्ठति", "।"],
      meaning: "A group of cows sits there."
    },{
      sentence: "शिशु क्रीडाङ्गणे पतति रोदनं करोति।",
      split: ["शिशु", "क्रीडाङ्गणे", "पतति", "रोदनं", "करोति", "।"],
      meaning: "The child falls in the playground; weeps."
    },{
      sentence: "महाभारतं पठित्वा अहं अनेकाः कथाः जानामि।",
      split: ["महाभारतं", "पठित्वा", "अहं", "अनेकाः", "कथाः", "जानामि", "।"],
      meaning: "Having read Mahabharata, I know many tales."
    },{
      sentence: "संस्कृतं सुलभम्। अतः अहं संस्कृतं पठामि। ",
      split: ["संस्कृतं", "सुलभम्", "।", "अतः", "अहं", "संस्कृतं", "पठामि", "।"],
      meaning: "Sanskrit is easy. So, I am studying Sanskrit"
    },{
      sentence: "अत्रैव महाविद्यालये पठामि|",
      split: ["अत्रैव", "महाविद्यालये", "पठामि", "|"],
      meaning: "यहीं कॉलेज में पढ़ रहा हूँ|"
    },{
      sentence: "सिद्धता कथम् अस्ति?",
      split: ["सिद्धता", "कथम्", "अस्ति", "?"],
      meaning: "कैसी तैयारी है|"
    },{
      sentence: "पाठ्यभाग: एव न समाप्त:|",
      split: ["पाठ्यभाग:", "एव", "न", "समाप्त:", "|"],
      meaning: "पाठ्यक्रम ही पूरा नही हुआ|"
    },{
      sentence: "गनितश्रवणमात्रेण मम शिरोवेदना|",
      split: ["गनितश्रवणमात्रेण", "मम", "शिरोवेदना", "|"],
      meaning: "मेरे लिए गणित माने सरदर्द|"
    },{
      sentence: "गाढम् अभ्यास: किम्|",
      split: ["गाढम्", "अभ्यास:", "किम्", "|"],
      meaning: "क्या डटके पढ़ रहे हो?"
    },{
      sentence: "अद्य किमपि ण पठितवान् किम्?",
      split: ["अद्य", "किमपि", "न", "पठितवान्", "किम्", "?"],
      meaning: "आज कुछ नही पढ़ पाया|"
    },{
      sentence: "मम लेखनं न सुन्दरम्|",
      split: ["मम", "लेखनं", "न", "सुन्दरम्", "|"],
      meaning: "मेरा लिखना सुन्दर नही है|"
    },{
      sentence: "एतम् उपन्यासं पठितवान् किम्?",
      split: ["एतम्", "उपन्यासं", "पठितवान्", "किम्", "?"],
      meaning: "क्या इस उपन्यास को पढ़ा?"
    },{
      sentence: "बहु सम्यक् अस्ति|",
      split: ["बहु", "सम्यक्", "अस्ति", "|"],
      meaning: "बहुत बढ़िया है|"
    },{
      sentence: "बहु पूर्वमेव पठितवान्|",
      split: ["बहु", "पूर्वमेव", "पठितवान्", "|"],
      meaning: "बहुत पहले पढ़ा था|"
    },{
      sentence: "शीघ्रं पठित्वा ददामि भो:|",
      split: ["शीघ्रं", "पठित्वा", "ददामि", "भो:", "|"],
      meaning: "जल्दी ही पढ़कर लौटा दूंगा|"
    },{
      sentence: "अद्य उत्थाने विलम्ब: सञ्जात:|",
      split: ["अद्य", "उत्थाने", "विलम्ब:", "सञ्जात:", "|"],
      meaning: "आज उठने में देर हुई|"
    },{
      sentence: "अहं गृहे एव त्यक्त्वा आगतवान्|",
      split: ["अहं", "गृहे", "एव", "त्यक्त्वा", "आगतवान्", "|"],
      meaning: "मै घर पर ही छोड़कर आया|"
    },{
      sentence: "अद्य तु विराम:|",
      split: ["अद्य", "तु", "विराम:", "|"],
      meaning: "आज तो अवकाश है|"
    },{
      sentence: "भवत: वर्गशिक्षक: क:?",
      split: ["भवत:", "वर्गशिक्षक:", "क:", "?"],
      meaning: "तुम्हारा कक्षाध्यापक कौन है?"
    },{
      sentence: "अद्य समवस्त्रेण गन्तव्यं किम्?",
      split: ["अद्य", "समवस्त्रेण", "गन्तव्यं", "किम्", "?"],
      meaning: "क्या आज वर्दी पहन के जाना है?"
    },{
      sentence: "यावत् विद्यालयं गतवान् तावत् घण्टानाद: अभवत्|",
      split: ["यावत्", "विद्यालयं", "गतवान्", "तावत्", "घण्टानाद:", "अभवत्", "|"],
      meaning: "स्कूल जाते-जाते घण्टी बजी|"
    },{
      sentence: "श्रीमान्, अन्त: अगच्छामी किम्?",
      split: ["श्रीमान्", ",", "अन्त:", "अगच्छामी", "किम्", "?"],
      meaning: "श्रीमान, क्या मैं अन्दर आऊँ?"
    }
  ] );
}


insertword()