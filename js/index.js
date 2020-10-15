var HideLeft = false;
var HideLeftinSmallWindow = false;
function TurnLeftMenu(){
    if (document.body.offsetWidth > 1330 )
    {
        var BigLeft = document.querySelector('#LeftBar');
        var SmallLeft = document.querySelector('#SmallLeftBar');
        if (HideLeft == false)
        {
            BigLeft.setAttribute("Style","display:none");
            SmallLeft.setAttribute("Style","display:inline-block");
            HideLeft = true;
        }
        else
        {
            BigLeft.setAttribute("Style","");
            SmallLeft.setAttribute("Style","");
            HideLeft = false;
        }
    }
    else
    {
        TurnLeftinSmallWindow();
    }
    ContentreSizing();ContentColumnCheck();
}
function TurnLeftinSmallWindow(){
    var target = document.querySelector('#LeftHide');
    if (HideLeftinSmallWindow == false)
    {
        target.setAttribute("Style","display:inline-block");
        HideLeftinSmallWindow = true;
    }
    else
    {
        target.setAttribute("Style","");
        HideLeftinSmallWindow = false;
    }
}


var Modalnow = null;
var NotiModal = null;
function UpperRightWindow(target){
    var mytarget = document.querySelector(target);
    if (Modalnow != null) 
    {
        if(Modalnow == mytarget)
        {
            if (NotiModal != null) CloseNotiModal();
            CloseModalnow();
        }
        else
        {
            CloseModalnow();
            mytarget.style.display="block"
            Modalnow=mytarget;
            if (NotiModal != null) CloseNotiModal();
        }
    }
    else
    {
        mytarget.style.display="block"
        Modalnow=mytarget;
    }
}

function ClickNotiModal(target){
    var mytarget = target.parentNode.parentNode.children[1];
    target.parentNode.parentNode.style="z-index:104;";
    if (NotiModal != null)
    {
        if (NotimModal == mytarget) CloseNotiModal();
        else
        {
            CloseNotiModal();
            NotiModal=mytarget;
            mytarget.style.display="block"
        }
    }
    else
    {
        NotiModal=mytarget;
        mytarget.style.display="block"
    }
}
function CloseModalnow(){
    if(Modalnow != null)
    {
        Modalnow.style.display="none";
        Modalnow = null;
    }
}
function CloseNotiModal(){
    NotiModal.parentNode.style="z-index:102;";
    NotiModal.style.display="none";
    NotiModal = null;
}
function CreateNotification(){
    var parent=document.querySelector('#NotiContainer');
    var target=document.querySelector('.NotiBoxWrap');
    var obj=target.cloneNode(true);
    parent.appendChild(obj);
    return obj;
}
function SetNoti(target,ChThum,Title,Thum,time){
    var ch = target.querySelector('.NotiBoxChannelThumWrap').children[0];
    var tl = target.querySelector('.NotiBoxInside').children[1];
    var th = target.querySelector('.NotiBoxInside').children[2];
    var ti = target.querySelector('.NotiBoxInside').children[3];
    ch.src=ChThum;
    tl.innerHTML=Title;
    ti.innerHTML=time;
    th.src=Thum;
}
function RemoveNoti(target){
    NotiModal=null;
    target.style.display='none';
}

function Redirect(target){
    window.location.href=target;
}
function CreateAuto(){
    var parent=document.querySelector('#SearchModal');
    var target=document.querySelector('.Autobox');
    var obj=target.cloneNode(true);
    parent.appendChild(obj);
    return obj;
}
function SetAuto(target,targetText){
    var ti = target.children[0].children[0];
    ti.innerHTML=targetText;
}
function RemoveAuto(target){
    target.parentNode.style.display='none';
}
function SearchModalWindow(target){
    var SearchModal = target.parentNode.parentNode.children[3];
    if (Modalnow != null)
    {
        if(Modalnow != SearchModal)
        {
            CloseModalnow();
            SearchModal.style.display="block"
            Modalnow = SearchModal;
        }
    }
    else
    {
        SearchModal.style.display="block"
        Modalnow = SearchModal;
    }
}

window.addEventListener("click", function(event)
{
    if (NotiModal != null)
    {
        if (event.target.classList.contains('Modal') != true)
        {
            if(event.target != NotiModal && event.target.parentNode != NotiModal)
            {
                CloseNotiModal();
            }
        }
    }
    else
    {
        if (Modalnow != null)
        {
            if (event.target.classList.contains('Modal') != true)
            {
                if(event.target != Modalnow && event.target.parentNode != Modalnow)
                {
                    CloseModalnow();
                }
            }
        }
    }
});


function SearchExamOnOff(target){
    var exam = document.querySelector('#SearchExam');
    if (target.value == "") exam.style.display="inline";
    else exam.style.display="none";
}

function SearchBarOn(){
    document.querySelector('#Left').style.display="none";
    document.querySelector('#Right').style.display="none";
    document.querySelector('#Middle').style.display="inline-block";
    document.querySelector('#SearchOffBtn').style.display="inline-block";
    CloseModalnow();
}
function SearchBarOff(){
    document.querySelector('#Left').style.display="inline-block";
    document.querySelector('#Right').style.display="inline-block";
    document.querySelector('#Middle').style.display="none";
    document.querySelector('#SearchOffBtn').style.display="none";
    CloseModalnow();
}
window.addEventListener('resize', function(){
    var SearchModal = document.querySelector('#SearchModal');
    if (Modalnow != null && Modalnow == SearchModal)
    {
        CloseModalnow();
    }
    if (document.body.offsetWidth > 670)
    {
        document.querySelector('#Left').removeAttribute("style");
        document.querySelector('#Right').removeAttribute("style");
        document.querySelector('#Middle').removeAttribute("style");
        document.querySelector('#SearchOffBtn').removeAttribute("style");
    }

    var SmallLeft = document.querySelector('#SmallLeftBar');
    if (HideLeft == true)
    {
        if (document.body.offsetWidth > 809)
        {
            SmallLeft.setAttribute("Style","display:inline-block");
        }
        else
        {
            SmallLeft.setAttribute("Style","display:none");
        }
    }
    if (HideLeftinSmallWindow == true)
    {
        if (document.body.offsetWidth > 1330)
        {
            TurnLeftinSmallWindow();
        }
    }
    ContentreSizing();
    ContentColumnCheck();
});

function ContentreSizing(){
    var BigLeft = document.querySelector('#LeftBar');
    var SmallLeft = document.querySelector('#SmallLeftBar');
    var Content = document.querySelector('#Content');
    if (HideLeft == false)
    {
        if (window.getComputedStyle(BigLeft).display != 'none')
        {
            Content.style.width = document.body.offsetWidth - 288 + 'px';
        }
        else
        {
            if (window.getComputedStyle(SmallLeft).display != 'none')
            {   
                if (document.body.offsetWidth > 809)
                {
                    Content.style.width = document.body.offsetWidth - 120 + 'px';
                }
                else
                {
                    Content.style.width = document.body.offsetWidth - 48 + 'px';
                }
            }
            else
            {
                Content.style.width = document.body.offsetWidth - 48 + 'px';
            }
        }
    }
    else
    {
        if (document.body.offsetWidth > 809)
        {
            Content.style.width = document.body.offsetWidth - 120 + 'px';
        }
        else
        {
            Content.style.width = document.body.offsetWidth - 48 + 'px';
        }
    }
}
function ContentColumnCheck(){
    var Content = document.querySelector('#Content');
    var BigLeft = document.querySelector('#LeftBar');
    //lefthide꺼져있을때
    if (HideLeft == false && window.getComputedStyle(BigLeft).display != 'none')
    {
        if (document.body.offsetWidth > 2304)
        {
            //6개
            Content.setAttribute("Style", Content.getAttribute("Style")+
            "grid-template-columns: repeat(6, minmax(0,360px))");
        }
        else if (document.body.offsetWidth > 1969)
        {
            //5개
            Content.setAttribute("Style", Content.getAttribute("Style")+
            "grid-template-columns: repeat(5, minmax(0,360px))");
        }
        else if (document.body.offsetWidth > 1330)
        {
            //4개, 동시에 꺼짐
            Content.setAttribute("Style", Content.getAttribute("Style")+
            "grid-template-columns: repeat(4, minmax(0,360px))");
        }
    }
    else
    {
        //켜져있을 때
        if(document.body.offsetWidth > 2136)
        {
            //6개
            Content.setAttribute("Style", Content.getAttribute("Style")+
            "grid-template-columns: repeat(6, minmax(0,360px))");
        }
        else if(document.body.offsetWidth > 1800)
        {
            //5개
            Content.setAttribute("Style", Content.getAttribute("Style")+
            "grid-template-columns: repeat(5, minmax(0,360px))");
        }
        else if(document.body.offsetWidth > 1144)
        {
            //4개
            Content.setAttribute("Style", Content.getAttribute("Style")+
            "grid-template-columns: repeat(4, minmax(0,360px))");
        }
        else if(document.body.offsetWidth > 888)
        {
            //3개
            Content.setAttribute("Style", Content.getAttribute("Style")+
            "grid-template-columns: repeat(3, minmax(0,360px))");
        }
        else if(document.body.offsetWidth > 512)
        {
            //2개
            Content.setAttribute("Style", Content.getAttribute("Style")+
            "grid-template-columns: repeat(2, minmax(0,360px))");
        }
        else
        {
            //1개
            Content.setAttribute("Style", Content.getAttribute("Style")+
            "grid-template-columns: repeat(1, minmax(0,360px))");
        }
    }
}

function CreateLeftBox(target, num, hide){
    var parent=document.querySelectorAll('.LeftContainer')[target];
    if (hide == true)
    {
        if (num==1)
        {
            parent = document.querySelectorAll('.PlaylistHide')[1];
        }
        else if (num==2)
        {
            parent = document.querySelectorAll('.SubHide')[1];
        }
    }
    else
    {
        if (num==1)
        {
            parent = document.querySelectorAll('.PlaylistHide')[0];
        }
        else if (num==2)
        {
            parent = document.querySelectorAll('.SubHide')[0];
        }
    }
    var target=document.querySelector('.LeftBox');
    var obj=target.cloneNode(true);
    obj.setAttribute("Style","");
    parent.appendChild(obj);
    return obj;
}
function CreateSubBox(target, num, hide){
    var parent=document.querySelectorAll('.LeftContainer')[target];
    if (hide == true)
    {
        if (num==2)
        {
            parent = document.querySelectorAll('.SubHide')[1];
        }
    }
    else
    {
        if (num==2)
        {
            parent = document.querySelectorAll('.SubHide')[0];
        }
    }
    var target=document.querySelector('.SubBox');
    var obj=target.cloneNode(true);
    parent.appendChild(obj);
    return obj;
}
function SetSubBox(target, icon, text, click){
    var ic = target.children[0].children[0];
    var te = target.children[1];

    ic.src = icon;
    te.innerHTML = text;
    target.setAttribute("onClick",click);
}
function SetLeftBox(target, icon, text, click, black){
    var ic = target.children[0];
    var te = target.children[1];

    ic.src = icon;
    te.innerHTML = text;
    target.setAttribute("onClick",click);

    if(black == 1) target.querySelector('img').setAttribute("style", "opacity: 0.6;");
}
function ShowPlaylist(){
    document.querySelectorAll('.PlaylistHide')[0].style.display="block";
    document.querySelectorAll('.ShowPlaylistBtn')[0].style.display="none";
    document.querySelectorAll('.PlaylistHide')[1].style.display="block";
    document.querySelectorAll('.ShowPlaylistBtn')[1].style.display="none";
}
function HidePlaylist(){
    document.querySelectorAll('.PlaylistHide')[0].style.display="none";
    document.querySelectorAll('.ShowPlaylistBtn')[0].style.display="block";
    document.querySelectorAll('.PlaylistHide')[1].style.display="none";
    document.querySelectorAll('.ShowPlaylistBtn')[1].style.display="block";
}
function ShowSub(){
    document.querySelectorAll('.SubHide')[0].style.display="block";
    document.querySelectorAll('.ShowSubBtn')[0].style.display="none";
    document.querySelectorAll('.SubHide')[1].style.display="block";
    document.querySelectorAll('.ShowSubBtn')[1].style.display="none";
}
function HideSub(){
    document.querySelectorAll('.SubHide')[0].style.display="none";
    document.querySelectorAll('.ShowSubBtn')[0].style.display="block";
    document.querySelectorAll('.SubHide')[1].style.display="none";
    document.querySelectorAll('.ShowSubBtn')[1].style.display="block";
}

function CreateContent(thum,intro,long,chthum,title,ch,view,time){
    var parent=document.querySelector('#Content');
    var target=document.querySelector('.ContentBox');
    var obj=target.cloneNode(true);

    obj.querySelector('.ContentBoxImg').src = thum;
    obj.querySelector('.ContentPrev').src = intro;
    obj.querySelector('.ContentBoxTime').innerHTML= long;
    obj.querySelector('.ContentChannelImgWrap').children[0].src= chthum;
    obj.querySelector('.ContentTitle').innerHTML= title;
    obj.querySelector('.ContentChannel').innerHTML= ch;
    obj.querySelector('.ContentLong').innerHTML= "조회수 "+ view + "회 · " + time;

    parent.appendChild(obj);
}
