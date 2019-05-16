<script>
$(document).ready(function() {

    var int = setInterval(fixCount, 50);  // 50ms周期检测函数
    var countOffset = 100;  // 初始化首次数据

    function fixCount() {            
       if (document.getElementById("busuanzi_container_site_pv").style.display != "none")
        {
            $("#busuanzi_value_site_pv").html(parseInt($("#busuanzi_value_site_pv").html()) + countOffset); 
            clearInterval(int);
        }                  
        if ($("#busuanzi_container_site_pv").css("display") != "none")
        {
            $("#busuanzi_value_site_uv").html(parseInt($("#busuanzi_value_site_uv").html()) + countOffset); // 加上初始数据 
            clearInterval(int); // 停止检测
        }  
    }
       	
});
</script>
<!-- 不蒜子计数初始值纠正 --------------------- -->
<!-- 不蒜子计数初始值纠正 作者：whik1194 -->
<!-- 不蒜子计数初始值纠正 来源：CSDN -->
<!-- 不蒜子计数初始值纠正 原文：https://blog.csdn.net/whik1194/article/details/83513630 -->
<!-- 不蒜子计数初始值纠正 版权声明：本文为博主原创文章，转载请附上博文链接！-->
