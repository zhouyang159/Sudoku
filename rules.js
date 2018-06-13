var rules = (function () {

    var rules = {};

    //检查中格子是否符合规则
    var middleBoxCheck = function () {//这里还有问题 flag 返回的是最后一个循环的，要注意

        var mdlBoxArr = document.getElementsByClassName('middleBox');
        var flag = true;

        for (var i = 0; i < 9; i++) {
            var cellBoxs = mdlBoxArr[i].querySelectorAll('.smallBox');
            var arr = [];

            for (var j = 0; j < cellBoxs.length; j++) {
                arr.push(cellBoxs[j].innerText * 1)
            }

            flag = arrCheck(arr);

            // if (flag === false) {
            //     console.log(i + '中格数据 不符合 规则');
            // } else {
            //     console.log(i + '中格数据 符合 规则');
            // }
        }

        return flag;
    }

    //检查行是否符合规则
    var rowCheck = function () {
        var mdlBoxArr = document.getElementsByClassName('middleBox');
        var rowIndex = 0;
        var flag = true;

        outterLoop: for (let m = 0; m < 7; m += 3) {//对应 1 2 3 行中格子
            for (let n = 0; n < 7; n += 3) {//对应每一行中格子当中的 1 2 3 行小格子 
                var rowArr = [];//构建行数组，然后进行判断是否合规
                for (let i = m; i < m + 3; i++) {
                    for (let j = n; j < n + 3; j++) {
                        // console.log(mdlBoxArr[i].children[0].children[j]);
                        var a = mdlBoxArr[i].children[0].children[j].innerText * 1;
                        rowArr.push(a);
                    }
                }
                flag = arrCheck(rowArr);
                if (flag === false) {
                    break outterLoop;
                }
                console.log(`第${rowIndex}行` + flag);
                rowIndex++
            }
        }

        return flag;
    }

    //检查列是否符合规则
    var colCheck = function () {

        var mdlBoxArr = document.getElementsByClassName('middleBox');
        var colIndex = 0;
        var flag = true;

        outterLoop:for (let m = 0; m < 3; m++) {
            for (let n = 0; n < 3; n++) {
                var colArr = [];//构建行数组，然后进行判断是否合规
                for (let i = m; i < 9; i += 3) {//让中格子竖直跳跃
                    for (let j = n; j < 9; j += 3) {//让小格子竖子跳跃
                        console.log(mdlBoxArr[i].children[0].children[j]);
                        var a = mdlBoxArr[i].children[0].children[j].innerText * 1;
                        colArr.push(a);
                    }
                }
                flag = arrCheck(colArr);
                if (flag === false) {
                    break outterLoop;
                }
                console.log(`第${colIndex}列` + flag);
                colIndex++
            }
        }

        return flag;
    }

    //检查传入的数组是否有重复,0除外
    var arrCheck = function (arr) {
        var flag = true;
        outterLoop: for (var k = 0; k < arr.length; k++) {
            if (arr[k] === 0) {
                continue;
            }
            for (var h = k + 1; h < arr.length; h++) {
                if (arr[h] === 0) {
                    continue;
                }
                if (arr[k] === arr[h]) {
                    flag = false;
                    break outterLoop;
                }
            }
        }
        return flag;
    }

    rules.middleBoxCheck = middleBoxCheck;
    rules.rowCheck = rowCheck;
    rules.colCheck = colCheck;

    return rules;
})()



