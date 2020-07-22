var that;

class Tab {
    constructor(id) {

        this.tab = document.getElementById(id);
        this.lis = tab.getElementsByTagName('li');
        this.sections = tab.getElementsByTagName('section');
        this.add = tab.getElementsByClassName('tabadd')[0];
        this.remove = tab.getElementsByClassName('iconfont icon-guanbi');
        this.spans = tab.querySelectorAll('nav ul li span:first-child');
        this.i = 4;
        this.init();


    }

    init() {


        that = this;

        this.add.onclick = this.addTab;
        this.update();

    }


    update() {


        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.remove[i].index = i;
            this.remove[i].onclick = this.removeTab;
            this.spans[i].onclick = this.editTab;


        }


    }

    toggleTab() {

        //console.log(this.index);

        for (var i = 0; i < that.lis.length; i++) {
            if (that.lis[i].className == 'liactive') {
                that.lis[i].className = '';
                that.sections[i].className = '';
            }
        }

        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';


    }


    addTab() {
        //console.log("i");
        for (var i = 0; i < that.lis.length; i++) {
            if (that.lis[i].className == 'liactive') {
                that.lis[i].className = '';
                that.sections[i].className = '';
            }
        }
        this.tabscon = document.getElementsByClassName("tabscon")[0];
        this.tabscon.insertAdjacentHTML('beforeend', '<section class="conactive">测试' + that.i + '</section>');

        this.firstnav = document.querySelector("nav ul");
        this.firstnav.insertAdjacentHTML('beforeend', '<li class="liactive"><span>测试' + that.i + '</span><span class="iconfont icon-guanbi"></span></li>');


        that.update();
        that.i++;

    }

    removeTab() {

        event.stopPropagation();
        var index1 = this.index;

        console.log(index1);
        this.firstnav = document.querySelector("nav ul");
        this.lis = this.firstnav.querySelectorAll('li');
        alert(this.lis[index1].innerHTML);
        this.lis[index1].remove();


    }

    editTab() {

        var str = this.innerHTML;
        this.innerHTML = '<input></input>';
        var input = this.children[0];
        input.value = str;
        input.select();
        input.onblur = function () {//焦点离开
            this.parentNode.innerHTML = this.value
        }
    }

}

new Tab('tab');