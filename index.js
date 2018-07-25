class ArrangeBox {
    constructor(selector) {
        this.selector = selector;
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
                            item.classList.remove('active');
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
                            item.classList.remove('active');

                        }
                    }
                }

                break;
            case 2:
                for (var item of newElemList) {
                    if (item.closest('#left-list')) {
                        let parentElemList = document.querySelector('#right-list');
                        parentElemList.append(item);
                        item.classList.remove('active');
                    }
                }
                break;
            case 4:
                for (var item of newElemList) {
                    if (item.closest('#right-list')) {
                        let parentElemList = document.querySelector('#left-list');
                        parentElemList.append(item);
                        item.classList.remove('active');
                    }
                }
                break;
            default:
        }
    }
    clickButtonArrangeBox(n) {
        let b = document.getElementById(`b${n}`);
        b.addEventListener('click', () => this.ButtonArrangeBox(n));
    }




}
document.addEventListener('DOMContentLoaded', function(){
    let arrange = new ArrangeBox();
    arrange.eventElementList('.list-item');
    arrange.clickButtonArrangeBox(1);
    arrange.clickButtonArrangeBox(2);
    arrange.clickButtonArrangeBox(3);
    arrange.clickButtonArrangeBox(4);
})





