class ArrangeBox {
    constructor() {
        this.b1 = document.getElementById('b1');
        this.b2 = document.getElementById('b2');
        this.b3 = document.getElementById('b3');
        this.b4 = document.getElementById('b4');
        this.selector = '.list-elem';
    }
    searchElemList() {
        return document.querySelectorAll(this.selector);
    }
    eventElementList() {
        let elemList = this.searchElemList();
        for (let i = 0; i < elemList.length; i++) {
            elemList[i].addEventListener('click', function () {
                if (this.classList.contains('active') == false) {
                    for (let i = 0; i < elemList.length; i++) {
                        elemList[i].classList.remove('active');
                    }
                    this.classList.add('active');
                }
            })
        }
    }
    ButtonArrangeBox(n) {
        let newElemList = this.searchElemList();
        switch(n){
            case 1:
                for (var item of newElemList) {
                    if (item.classList.contains('active')) {
                        if (item.closest('#left-list')) {
                            let parentElemList = document.querySelector('#right-list');
                            parentElemList.appendChild(item);
                        }
                    }
                }
                break;
            case 3:

                for (var item of newElemList) {
                    if (item.classList.contains('active')) {
                        if (item.closest('#right-list')) {
                            let parentElemList = document.querySelector('#left-list');
                            parentElemList.appendChild(item);


                        }
                    }
                }

                break;
            case 2:
                for (var item of newElemList) {
                    if (item.closest('#left-list')) {
                        let parentElemList = document.querySelector('#right-list');
                        parentElemList.append(item);
                    }
                }
                break;
            case 4:
                for (var item of newElemList) {
                    if (item.closest('#right-list')) {
                        let parentElemList = document.querySelector('#left-list');
                        parentElemList.append(item);
                    }
                }
                break;
            default:
        }
    }
    clickButtonArrangeBox1(n) {
        let b1 = this.b1;
        b1.addEventListener('click', () => this.ButtonArrangeBox(n))
    }
    clickButtonArrangeBox2(n) {
        let b2 = this.b2;
        b2.addEventListener('click', () => this.ButtonArrangeBox(n))
    }
    clickButtonArrangeBox3(n) {
        let b3 = this.b3;
        b3.addEventListener('click', () => this.ButtonArrangeBox(n))
    }
    clickButtonArrangeBox4(n) {
        let b4 = this.b4;
        b4.addEventListener('click', () => this.ButtonArrangeBox(n))
    }




}
document.addEventListener('DOMContentLoaded', function(){
    let arrange = new ArrangeBox();
    arrange.eventElementList();
    arrange.clickButtonArrangeBox1(1);
    arrange.clickButtonArrangeBox2(2);
    arrange.clickButtonArrangeBox3(3);
    arrange.clickButtonArrangeBox4(4);
})





