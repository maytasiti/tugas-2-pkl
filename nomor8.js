
class kegiatan{
    constructor(pagi, siang, malam){
        this.Pagi = pagi;
        this.Siang = siang;
        this.Malam = malam;
    }
    mandi(ibak){
        if (ibak == "yurrr"){
            console.log("nyurrrr");
        }
        else {
            console.log("duhhh");
        }
    }
    makan(makanan){
        if (makanan == "enak"){
            console.log("nyam nyam nyam");
        }
        else {
            console.log("bheee");
        }
    }
    tidur(tiduran){
        if (tiduran == "enak"){
            console.log("huahahh");
        }
        else {
            console.log("bheee");
        }
    }
}
var sehari1 = new kegiatan("pagi", "siang", "malam")
sehari1.mandi("yurrr");
