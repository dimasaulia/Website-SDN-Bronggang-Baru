$(document).ready(function(){
    $("#tanggalPeminjaman").change(function(){

        Date.prototype.addDays = function (days) {
            const date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        };

        var tanggalPinjam = $("#tanggalPeminjaman").val();

        console.log(tanggalPinjam);
        function addDays(date, days) {
            var result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
          }

        function appendLeadingZeroes(n){
        if(n <= 9){
            return "0" + n;
        }
        return n
        }

        var tanggalPengembalian = addDays(tanggalPinjam,3);
        tanggalPengembalian     = tanggalPengembalian.getFullYear() + "-"  +  (tanggalPengembalian.getMonth()+1) + "-" + appendLeadingZeroes(tanggalPengembalian.getDate());
        console.log(tanggalPengembalian);

        $("#tanggalPengembalian").val(tanggalPengembalian);
    });
});
