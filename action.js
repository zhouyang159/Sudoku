(function(){

    var box = document.getElementsByClassName('box')[0];
    var select = document.getElementById('select');
	var run = document.getElementById('run');
    var currentCell;
    var timer;


    box.onclick = function (e) {
        e = e || window.event;
        currentCell = e.target || e.srcElement;
        var position = {
            x: currentCell.offsetLeft,
            y: currentCell.offsetTop
        }

        if(currentCell.className === 'smallBox digOut'){
            select.style.left = '' + (position.x + 1) + 'px';
            select.style.top = '' + (position.y + 1) + 'px';
            select.style.display = 'block';
        }

        if(currentCell.className === 'smallBox'){
            select.style.display = 'none';
        }

        e.stopPropagation();
    }


    select.onclick = function (e) {
        e = e || window.event;
        var selNum = e.target || e.srcElement;

        if (selNum.tagName === 'LI') {
            currentCell.innerText = selNum.innerText;
            if(selNum.innerText === 'Del'){
                currentCell.innerText = '';
                currentCell.style.backgroundColor = '#FFEB3B';

            }
        }
        select.style.display = 'none';

        var result = checkAll();

        if(result.m === true && result.r === true && result.c === true ){
            console.log('所有格子合规');
            currentCell.style.backgroundColor = '#FFEB3B';
            if(result.f === true){
                alert('Congratulations! you finished the Sudoku!');
                window.clear(timer);
            }
        }else{
            console.log('当前格子不合规');
            currentCell.style.backgroundColor = 'red';
        }

        e.stopPropagation();
    }


    document.onclick = function () {
        select.style.display = 'none';
    }

    
    run.onclick = function(){
        timing();
    }

    function timing(){
        var h = document.getElementById('h');
        var m = document.getElementById('m');
        var s = document.getElementById('s');
        var begin = new Date();

        timer = setInterval(function(){
            var now = new Date();
            var offset = parseInt((now.getTime() - begin.getTime())/1000);


            var sec = offset%60;
            var min = parseInt(offset/60)%60;
            var hour = parseInt(offset/60/60)%24;

            //补0操作
            hour = hour <10? '0' + hour : hour;
            min  = min  <10? '0' + min  : min;
            sec  = sec  <10? '0' + sec  : sec;


            h.innerHTML = hour;
            m.innerHTML = min;
            s.innerHTML = sec;

            console.log(min);
        },10)
    }

    //检查所有格子是否合规
    function checkAll() {
        var result = {};
        result.m = rules.middleBoxCheck();
        result.r = rules.rowCheck();
        result.c = rules.colCheck();
        result.f = rules.isFull();
        console.log(result);

        return result;
    }

})();



