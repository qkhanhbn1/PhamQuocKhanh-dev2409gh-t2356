$(document).ready(function(){
    //lấy đơn giá
      $('.p-act button.plus').click(function(){
        let price = $(this).siblings('input').attr('data-price');
        console.log("Price +:", price);
        //lấy số lượng hiện tại
        let qty = $(this).siblings('input').val();
        if(parseInt(qty)>=100) return;
        console.log("Số lượng:",qty);
        //tăng số lượng
        qty = parseInt(qty)+1 ;
        //gán lại ô input
        $(this).siblings('input').val(qty);

        //tính thành tiền
        let thanhTien = qty*parseFloat(price);
        //gán vào phần hiển thị
        $(this).parent().siblings("p").children('span.thanh-tien').text(fn_formatMoney(thanhTien,0,',','.'));
        $(this).parent().siblings("p").children('span.thanh-tien').attr("data-money",thanhTien); 

        console.log("Tổng thành tiền:",fn_tongThanhTien());
        //tinh tong thanh tien
        let tong = fn_tongThanhTien();  
        $("#tongThanhTien").html(fn_formatMoney(tong,0,',','.'));

        //tính tổng hóa đơn
        $("#tongTien").html(fn_formatMoney(tong,0,',','.'));
        });


        $('.p-act button.minus').click(function(){
        let price = $(this).siblings('input').attr('data-price');
        console.log("Price -:", price);
        let qty = $(this).siblings('input').val();
        if(parseInt(qty)<=0) return;
        console.log("Số lượng:",qty);
        qty = parseInt(qty)-1;
        //gán lại ô input
        $(this).siblings('input').val(qty);
        let thanhTien = qty*parseFloat(price);
        //gán vào phần hiển thị
        $(this).parent().siblings("p").children('span.thanh-tien').text(fn_formatMoney(thanhTien,0,',','.'));
        $(this).parent().siblings("p").children('span.thanh-tien').attr("data-money",thanhTien);

        console.log("Tổng thành tiền:",fn_tongThanhTien());
        
        let tong = fn_tongThanhTien();
        $("#tongThanhTien").html(fn_formatMoney(tong,0,',','.'));
         //tính tổng hóa đơn
         $("#tongTien").html(fn_formatMoney(tong,0,',','.'));
        });

        //tính tổng thành tiền, tổng tiền
        const fn_tongThanhTien = () => {
            let tong = 0;
            $('span.thanh-tien').each(function () {
                let thanhTien = $(this).attr('data-money');
                // console.log(thanhTien);
                // console.log("text:", $(this).text());
                tong += parseFloat(thanhTien);
            });
            return tong;
        }
    
        console.log("Tổng thành tiền:",fn_tongThanhTien());
            
        //xoa
        $('button.remove').click(function(){
            if(!confirm('Bạn có muốn xóa không?')) return;
            console.log("OK");

            $(this).parent().parent().remove();
        });

        //input change
        $('.p-act input').change(function(){
            //lấy đơn giá
            let price = $(this).attr('data-price');
            console.log("Price +:", price);
            //lấy số lượng hiện tại
            let qty = $(this).val();
            qty=parseInt(qty);
            if(parseInt(qty)>=10 || qty <=1) return;
            console.log("Số lượng:",qty);
            //tinh thanh tien
            let thanhTien = qty*parseFloat(price);
            //gán vào phần hiển thị
            $(this).parent().siblings("p").children('span.thanh-tien').text(fn_formatMoney(thanhTien,0,',','.'));
            $(this).parent().siblings("p").children('span.thanh-tien').attr("data-money",thanhTien); 
    
            console.log("Tổng thành tiền:",fn_tongThanhTien());
            //tinh tong thanh tien
            let tong = fn_tongThanhTien();
            $("#tongThanhTien").html(fn_formatMoney(tong,0,',','.'));
    
            //tính tổng hóa đơn
            $("#tongTien").html(fn_formatMoney(tong,0,',','.'));
        })
    })

    


function fn_formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
 
      const negativeSign = amount < 0 ? "-" : "";
 
      let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
      let j = (i.length > 3) ? i.length % 3 : 0;
 
      return negativeSign +
        (j ? i.substr(0, j) + thousands : '') +
        i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
        (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
      console.log(e)
    }
  };
 

var fntest = fn_formatMoney('123456',0,',','.')
console.log("Format:",fntest);
    
