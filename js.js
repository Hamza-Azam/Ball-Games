
function append() {
    let ball = document.createElement('img');
    ball.setAttribute('class', 'ball1')
    ball.setAttribute('src', 'images/ball-3.png')
    container.appendChild(ball);
    let tops = container.getBoundingClientRect().height * Math.random();
    let lefts = container.getBoundingClientRect().width * Math.random();
    ball.style.top = tops + 'px';
    ball.style.left = lefts + 'px';
}


function random() {
    let ball = document.querySelectorAll('.ball1');
    // console.log('ball height ' + ball[0].offsetHeight)
    let tops = container.getBoundingClientRect().height - ball[0].offsetHeight;
    let lefts = container.getBoundingClientRect().width - ball[0].offsetWidth;
    ball.forEach(function (item) {
        item.directionY = 1;
        item.directionx = 1;
        item.style.top = ((tops) * Math.random()) + 'px';
        item.style.left = ((lefts) * Math.random()) + 'px';
        console.log(item.style.top);
        console.log(item.style.left);
    });
//random end
}

function move() {


    key = setInterval(() => {

        let ball = document.querySelectorAll('.ball1');
        ball.forEach(function (item) {

            //DY
            if (item.directionY == 1) {
                let up = parseInt(item.style.top) + 1;
                item.style.top = up + 'px';

            } else {
                let up = parseInt(item.style.top) - 1;
                item.style.top = up + 'px';
            }
            //DX
            if (item.directionX == 1) {
                let side = parseInt(item.style.left) - 1;
                item.style.left = side + 'px';
            } else {
                let side = parseInt(item.style.left) + 1;
                item.style.left = side + 'px';
            }


            let Bounds = item.getBoundingClientRect();
            let Box = container.getBoundingClientRect();

            //4 ifs
            if ((Bounds.top + Bounds.height) > Box.bottom) {
                item.directionY = 0;

            }
            if ((Bounds.top) < Box.top) {
                item.directionY = 1;

            }

            if ((Bounds.left) < Box.left) {
                item.directionX = 0;

            }
            if ((Bounds.right) > Box.width) {
                item.directionX = 1;

            }


        //interval end
        }, 1000)

        //interval end
    })
    //move end
}
random();
move();
function stop() {
    clearInterval(key);
}
function start() {
    move()
}