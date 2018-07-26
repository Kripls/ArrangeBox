class ArrangeBox {
    constructor() {
        this.numButton  = [1,2,3,4];
        this.parentElemListRight = document.getElementById('right-list');
        this.parentElemListLeft = document.getElementById('left-list');
        this.parentList = document.querySelectorAll('.parent-list');
    }
    searchElemList() {
        return document.querySelectorAll('.list-elem');
    }
    eventElementList() {
        let parentList = this.parentList;
        let childList = this.searchElemList();
        for(let parent of parentList){
            parent.addEventListener('click', function (e) {
                if(e.target!=parent && e.target.hasAttribute('data-elem') && e.target.classList.contains('active') == false) {
                    for(let child of childList){
                        child.classList.remove('active');
                    }
                    e.target.classList.add('active');
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
                            this.parentElemListRight.appendChild(item);
                            item.classList.remove('active');
                        }
                    }
                }
                break;
            case 3:

                for (let item of this.searchElemList()) {
                    if (item.classList.contains('active')) {
                        if (item.closest('#right-list')) {
                            this.parentElemListLeft.appendChild(item);
                            item.classList.remove('active');

                        }
                    }
                }

                break;
            case 2:
                for (let item of this.searchElemList()) {
                    if (item.closest('#left-list')) {
                        this.parentElemListRight.append(item);
                        item.classList.remove('active');
                    }
                }
                break;
            case 4:
                for (let item of this.searchElemList()) {
                    if (item.closest('#right-list')) {
                        this.parentElemListLeft.append(item);
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
    let arrange = new ArrangeBox();
    arrange.eventElementList();
    arrange.clickButtonArrangeBox();
})





