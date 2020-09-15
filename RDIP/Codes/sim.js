var engcorp=[["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"]
                         ["some students like to study in the night","at night some students like to study"],
                         ["John and Mary went to church","Mary and John went to church"],
                         ["John went to church after eating","after eating John went to church","John after eating went to church"],
                         ["did he go to market","he did go to market"]
                         ["the woman who called my sister sells cosematics","the woman who sells cosematics called  my sister","my sister who sells cosematics called the woman","my sister who called the woman sells cosematics"],
                         ["John goes to the library annd studies","John studies and goes to the library"],
                         ["John ate an apple so did she","she ate an apple so did John"],
                         ["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after she noticed the error the teacher returned the book"],
                         ["I told her that I bought a book yesterday","I told her yesterday that I bought a book","I bought a book yesterday that I told her","yesterday i bought a book that i told her"]
              ];

var hincorp=[["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम"],
                             ["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
                             ["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
                             ["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
                             ["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
                             ["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
                             ["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]
             ];
                        
function language( ){
    document.getElementById("intro").innerHTML="<b>Form a sentence (Declarative or Interrogative or any other type) from the given words</b><br>(select the buttons in proper order)";

division=document.getElementById("w_buttons");
division.innerHTML=" ";
if(documnet.getElementById("lang").value=="english"){
corpus=engcorp;
}
else{
corpus=hincorp;
}
index=Math.floor(Math.random( )*corpus.length);
sentence=corpus[index][0];
words=sentence.split(" ");
console.log(words);
for(i=0;i<words.length;i++){
ind=Math.floor(Math.random( )*words.length);
temp=words[ind];
words[ind]=words[i];
words[i]=temp;
}
but=[ ]
for(i=0;i<words.length;i++){
but[i]=document.createElement("input");
but[i].type="button";
but[i].value=words[i];
but[i].style.display="inline";
but[i].style.margin="0px 5px";
division.appendChild(but(i));
}
console.log(but);
}
