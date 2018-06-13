    //检查行是否符合规则
    var rowCheck = function () {

        var mdlBoxArr = document.getElementsByClassName('middleBox');

        var rowArr = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                console.log(mdlBoxArr[i].children[0].children[j]);
                var a = mdlBoxArr[i].children[0].children[j].innerText * 1;
                rowArr.push(a);
            }
        }
        var flag = arrCheck(rowArr);
        console.log(flag);

        var rowArr = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 3; j < 6; j++) {
                console.log(mdlBoxArr[i].children[0].children[j]);
                var a = mdlBoxArr[i].children[0].children[j].innerText * 1;
                rowArr.push(a);
            }
        }
        var flag = arrCheck(rowArr);
        console.log(flag);

        var rowArr = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 6; j < 9; j++) {
                console.log(mdlBoxArr[i].children[0].children[j]);
                var a = mdlBoxArr[i].children[0].children[j].innerText * 1;
                rowArr.push(a);
            }
        }
        var flag = arrCheck(rowArr);
        console.log(flag);
    }


    // =============================================

    for(let n = 0; n < 7; n+=3){
        var rowArr = [];
        for (let i = 0; i < 3; i++) {
            for (let j = n; j < n+3; j++) {
                console.log(mdlBoxArr[i].children[0].children[j]);
                var a = mdlBoxArr[i].children[0].children[j].innerText * 1;
                rowArr.push(a);
            }
        }
        var flag = arrCheck(rowArr);
        console.log(flag);
    }

    for(let n = 0; n < 7; n+=3){
        var rowArr = [];
        for (let i = 3; i < 6; i++) {
            for (let j = n; j < n+3; j++) {
                console.log(mdlBoxArr[i].children[0].children[j]);
                var a = mdlBoxArr[i].children[0].children[j].innerText * 1;
                rowArr.push(a);
            }
        }
        var flag = arrCheck(rowArr);
        console.log(flag);
    }

    for(let n = 0; n < 7; n+=3){
        var rowArr = [];
        for (let i = 6; i < 9; i++) {
            for (let j = n; j < n+3; j++) {
                console.log(mdlBoxArr[i].children[0].children[j]);
                var a = mdlBoxArr[i].children[0].children[j].innerText * 1;
                rowArr.push(a);
            }
        }
        var flag = arrCheck(rowArr);
        console.log(flag);
    }



    // ====================================

    var flag = false;
    var idx = 0;
    do {
        console.log(flag);
        idx++;
        console.log(idx);

            renderBox();
            var a = rules.middleBoxCheck();
            var b = rules.rowCheck();
            // console.log(rules);
            console.log(a, b);
            flag = false;
            if (a === true && b === true) {
                flag = true;
            }
        
    } while (flag === false);

    console.log('finished');
