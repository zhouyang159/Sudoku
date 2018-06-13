(function () {

    var box = document.getElementsByClassName('box')[0];
    var select = document.getElementById('select');
    var currentCell;
    var level = 3;


    box.onclick = function (e) {
        e = e || window.event;
        currentCell = e.target || e.srcElement;
        var position = {
            x: currentCell.offsetLeft,
            y: currentCell.offsetTop
        }

        console.log(currentCell);

        select.style.left = '' + (position.x + 1) + 'px';
        select.style.top = '' + (position.y + 1) + 'px';
        select.style.display = 'block';

        e.stopPropagation();
    }


    select.onclick = function (e) {
        e = e || window.event;
        var selNum = e.target || e.srcElement;

        if (selNum.tagName === 'LI') {
            currentCell.innerText = selNum.innerText;
        }
        select.style.display = 'none';

        e.stopPropagation();
    }

    function renderBox() {
        var mdlBoxs = document.getElementsByClassName('middleBox');
        for (var i = 0; i < mdlBoxs.length; i++) {
            renderMiddleBox(mdlBoxs[i]);
        }
    }

    function renderMiddleBox(mdlBox) {
        var smlBoxs = mdlBox.getElementsByClassName('smallBox');

        var arr = randomNumber(level);
        var arr2 = getNum();

        //重置小格子全部为空
        for (var i = 0; i < 9; i++) {
            smlBoxs[i].innerText = '';
        }

        for (var i = 0; i < level; i++) {

            smlBoxs[arr[i]].innerText = arr2[i];
        }
    }


    function randomNumber(n) {//调用函数，生成n位不重复的数字,范围是0~8
        do {
            var str = '';
            for (var i = 0; i < n; i++) {
                var num = parseInt(Math.random() * 9)
                str += num;
            }
            var arr = str.split('');
            arr = arr.map(function (item) {
                return item * 1;
            });
            var flag = true;
            outterLoop: for (var i = 0; i < arr.length; i++) {
                for (var j = i + 1; j < arr.length; j++) {
                    if (arr[i] === arr[j]) {
                        flag = false;
                        break outterLoop;
                    }
                }
            }
        } while (flag === false);
        return arr;
    }

    function getNum() {//创建1~9 的不重复数字的数组
        var arr = randomNumber(9);
        for (var i = 0; i < 9; i++) {
            arr[i] = arr[i] + 1;
        }
        return arr;
    }

    var flag = false;
    var g = 0;

    for(let i=0;i<2000;i++){
        g++
        console.log(g);

        renderBox();
        var a = rules.middleBoxCheck();
        var b = rules.rowCheck();
        var c = rules.colCheck();
        // console.log(rules);
        console.log(a, b, c);
        if (a === true && b === true && c === true) {
            flag = true;
            break;
        }

    }

    console.log('finished');


})()




