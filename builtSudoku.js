(function () {

    //代表每个中格子里边去掉几个数字
    var level = 4;

    //随机填充第0个宫
    function fillFirstMiddleBox() {
        var firstMiddleBox = document.getElementsByClassName('middleBox')[0];
        var smlBoxs = firstMiddleBox.getElementsByClassName('smallBox');

        var arr = randomNumber(9);
        var arr2 = getNum();

        for (var i = 0; i < 9; i++) {
            smlBoxs[arr[i]].innerText = arr2[i];
        }
    }

    //建立剩余71个小格的一个总数组
    function bulidArr() {
        var middleBoxs = document.getElementsByClassName('middleBox');
        var arr = [];

        for (let i = 1; i < 9; i++) {
            var a = middleBoxs[i].querySelectorAll('.smallBox');
            for (let i = 0; i < 9; i++) {
                arr.push(a[i]);
            }
        }

        return arr;
    }


    //从第二个宫的第一小格开始递归填充数字,建立好一个完整的数独表
    function injectNum() {
        var smallBoxs = bulidArr();
        var index = 0;

        //递归去填充剩余71个小格，生成完整数独表
        function recursion(index) {
            for (let i = 1; i < 10; i++) {
                smallBoxs[index].innerText = i;
                if (checkAll() === true) {
                    if (index === 71) {
                        return 'finished!';
                    }
                    if (recursion(index + 1) === 'finished!') {
                        return 'finished!';
                    }
                }
            }
            smallBoxs[index].innerText = '';
            return;
        }
        recursion(index);
    }

    //去掉其中的几个数字，形成数独谜题
    function digOutNum() {

        var mdlBoxs = document.getElementsByClassName('middleBox');

        for(let i = 0; i < 9; i++){
            var smlBoxs = mdlBoxs[i].getElementsByClassName('smallBox');
            var arr = randomNumber(9);
            console.log(arr);
            for (let i = 0; i < level; i++) {

                smlBoxs[arr[i]].innerText = '';
                smlBoxs[arr[i]].className = 'smallBox digOut';

            } 
        }
    }

    //调用函数，生成n位不重复的数字,范围是0~8
    function randomNumber(n) {
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


    //创建1~9 的不重复数字的数组
    function getNum() {
        var arr = randomNumber(9);
        for (var i = 0; i < 9; i++) {
            arr[i] = arr[i] + 1;
        }
        return arr;
    }


    //检查所有格子是否合规
    function checkAll() {
        var flag = false;
        var m = rules.middleBoxCheck();
        var r = rules.rowCheck();
        var c = rules.colCheck();
        // console.log('a:' + a, 'b:' + b, 'c:' + c);
        if (m === true && r === true && c === true) {
            flag = true;
        }
        return flag;
    }


    fillFirstMiddleBox();
    injectNum();
    digOutNum();

})();




