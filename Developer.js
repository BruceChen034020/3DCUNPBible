/*
感謝您觀看這份程式碼
作品名稱: N/A
作者: 陳光穎 Bruce Chen
聯絡方式
  Facebook連結: https://www.facebook.com/bruce.chen.372
  LINE ID: brucechen0
最後修改日期: N/A
版本: 1.0.0.0
發表於: https://brucechen034020.github.io/
程式碼尺度
  N/A
智慧財產權:
    本作品作者與使用者約定如下:
      1. 您（使用者）可以複製、發行、展覽、表演、放映、廣播或通過資訊網路傳播本作品；不需標示作者姓名。
      2. 您可以自由複製、散布、展示及演出本作品。
      3. 您可以自由以任何形式改變、轉變或更改本作品。
      4. 您得為教育、娛樂、學術、公益、報導、評論目的而使用本作品，不限所利用之質量及其在整個著作所占之比例。
      5. 您不能增設法律條款或科技措施，來限制別人依本約定本已許可的作為。
      6. 若您重混、轉換、改變、轉變或更改本作品，或依本作品建立新作品，您必須依本約定來散布您的貢獻物。
作者註解:
  1. 如本網頁有 bug 請用 Facebook(Messenger) 通知 Bruce Chen，謝謝。
  2. 如有任何建議，請用 Facebook(Messenger) 通知 Bruce Chen，謝謝。
  */

/* Global variables */
var textBox1; // Input (TextBox)
var button1; // Convert (Button)
var textBox2; // Output (TextBox)

/* p5 functions */
function setup() {
    /* Disable right click */
    //$('body').on('contextmenu', 'canvas', function(e){ return false; });

    noCanvas();
    label1 = createP("複製經文至此，在分子句處加入 \'/\' ，即產生代碼。");
    textBox1 = createElement("textarea");
    textBox1.size(900, 250);
    createP('');
    button1 = createButton("Convert");
    button1.mousePressed(button1_Clicked)
    createP('');
    textBox2 = createElement("textarea");
    textBox2.size(900, 250);
}

function draw() {
    // This function is currently empty
}

/* User defined functions */
function isNumber(/*char*/ c) { // whether a char is a number (bool)
    if ('0' <= c && c <= '9') {
        return true;
    }
    return false;
}

/* events
版本: 1.0.0.0
Date: N/A
*/

/* Timed Events */

/* Click Events */
function button1_Clicked() { // click 'Convert' (void)
    var s = textBox1.value(); // input (string)
    var o = ""; // output (string)
    var v = ""; // 第幾節 (string)
    var cl = 'a'.charCodeAt(0); // 第幾子句 (char)
    var st = 1; // 打印經文=1, 打印節號=0 (int)
    var i; // input string index (int)
    for (i = 0; i<s.length; i++) {
        if (isNumber(s[i])) { // 節號
            if (st) {
                v = "";
                o += "<sup>";
            }
            v += s[i];
            o += s[i];
            st = 0;
        }else if (s[i] == '/') { // 子句分隔符號
            cl++;
            o += "<sup>" + v + String.fromCharCode(cl) + "</sup>";
        } else { // 經文
            if (!st) {
                cl = 'a'.charCodeAt(0);
                o += String.fromCharCode(cl) + "</sup>";
            }
            o += s[i];
            st = 1;
         }
    }
    textBox2.html(o);
}

/* Value Events */
