class ArrangeBox {
    constructor(selector) {
        this.selector = selector;
        this.numButton  = [1,2,3,4];
    }
    searchElemList() {
        return document.querySelectorAll(this.selector);
    }
    eventElementList() {
        let elemList = this.searchElemList();
        for (let elem of elemList) {
            elem.addEventListener('click', function () {
                if (this.classList.contains('active') == false) {
                    for (let elem of elemList) {
                        elem.classList.remove('active');
                    }
                    this.classList.add('active');
                }
            })
        }
    }
    ButtonArrangeBox(n) {
        switch(n){
            case 1:
                for (let item of this.searchElemList()) {
                    if (item.classList.contains('active')) {
                        if (item.closest('#left-list')) {
                            let parentElemList = document.getElementById('right-list');
                            parentElemList.appendChild(item);
                            item.classList.remove('active');
                        }
                    }
                }
                break;
            case 3:

                for (let item of this.searchElemList()) {
                    if (item.classList.contains('active')) {
                        if (item.closest('#right-list')) {
                            let parentElemList = document.getElementById('left-list');
                            parentElemList.appendChild(item);
                            item.classList.remove('active');

                        }
                    }
                }

                break;
            case 2:
                for (let item of this.searchElemList()) {
                    if (item.closest('#left-list')) {
                        let parentElemList = document.getElementById('right-list');
                        parentElemList.append(item);
                        item.classList.remove('active');
                    }
                }
                break;
            case 4:
                for (let item of this.searchElemList()) {
                    if (item.closest('#right-list')) {
                        let parentElemList = document.getElementById('left-list');
                        parentElemList.append(item);
                        item.classList.remove('active');
                    }
                }
                break;
            default:
        }
    }
    clickButtonArrangeBox() {
        for(let i = 0; i < this.numButton.length; i++){
            let b = document.getElementById(`b${this.numButton[i]}`);
            b.addEventListener('click', () => this.ButtonArrangeBox(this.numButton[i]));
        }

    }




}
document.addEventListener('DOMContentLoaded', function(){
    let arrange = new ArrangeBox('.list-elem');
    arrange.eventElementList();
    arrange.clickButtonArrangeBox();
})





