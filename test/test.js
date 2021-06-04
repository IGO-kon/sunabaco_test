console.log("ばるす");
// 変数→特定の値を置き換えたもの
var twitter_name = "いぐお";
console.log(twitter_name);
var firstname = "近藤";
var fullname = firstname + twitter_name;
console.log(fullname);

var twitter_name = "たかちゃん";
console.log(twitter_name);
var firstname = "荒井";
var fullname = firstname + twitter_name;
console.log(fullname);


// 関数→一連の処理をまとめたもの
function namae(x,y){
    var fullname = x + y;
    console.log(fullname);
}
namae("小野ちゃん","onichan")

// 条件式
const getup = 9;
const must_getup = 8;
if(getup<must_getup){
    console.log("間に合いました");
}else{
    console.log("ちこくううううううううう")
}



// if(my_hand === "ぐ")

function make_full_name(x,y){
    console.log(x+y);
    const return_fullname = x+y;
    return return_fullname;
}
make_full_name("秋山","武蔵")
console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
console.log(make_full_name("秋山","武蔵"))
console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");

//じゃんけん
// 自分のて　が決まる
// コンピューの手が決まる
// 自分の手とコンピューターの手を比べて
// 条件によって、
// 勝ち、負け、引き分け


function janken(my_hand,com_hand){
    if (my_hand===com_hand){
        alert("引き分けです");
    }else if(my_hand=="ぐ"&&com_hand=="チョキ"||my_hand=="チョキ"&&com_hand=="ぱー"||my_hand=="ぱー"&&com_hand=="ぐ"){
        console.log("あなたの勝ちです")
    }else{
        console.log(com_hand);
        console.log(my_hand);
        console.log("あなたの負けです")
    }
}

janken("ぐ","チョキ");

const split_test = "香川県うどん市".split("県");
console.log(split_test);
//split_test→["仕事","私","お金","名誉","地位","権力","名声"]
const a = split_test[1];
console.log(a);

// 連想配列
const udon = {curry:"カレー",carbonara:"かまたまバター",ebi:"えび"};

console.log("ご注文は"+udon["carbonara"]+"うどんですか？");

for(let i =0;i<10;i++){
    console.log(i);
}
function greet(name){
    const greets = name +"さん、こんにちは";
    return greets;
}

const login = greet("いぐお");









let btn_node =document.getElementById("text_change_button");
btn_node.addEventListener("click",changetext)

function changetext(){
    let text_node = document.getElementById("text");
    text_node.textContent = "8：15";
};

$(function(){
    $("#text").text("こうしんしたじぇ");
});