var a=Math.floor(Math.random()*6)+1;
var b=Math.floor(Math.random()*6)+1;

var image1 = document.getElementsByClassName('img1')[0];
var image2 = document.getElementsByClassName('img2')[0];
if (a===1){
image1.setAttribute("src","images/dice1.png")
}
else if (a===2){
    image1.setAttribute("src","images/dice2.png")
    }
else if (a===3){
        image1.setAttribute("src","images/dice3.png")
        }
else if (a===4){
            image1.setAttribute("src","images/dice4.png")
            }
else if (a===5){
                image1.setAttribute("src","images/dice5.png")
                }
            
else if (a===6){
                    image1.setAttribute("src","images/dice6.png")
                    }
                    

                    if (b===1){
                        image2.setAttribute("src","images/dice1.png")
                        }
                        else if (b===2){
                            image2.setAttribute("src","images/dice2.png")
                            }
                        else if (b===3){
                                image2.setAttribute("src","images/dice3.png")
                                }
                        else if (b===4){
                                    image2.setAttribute("src","images/dice4.png")
                                    }
                        else if (b===5){
                                        image2.setAttribute("src","images/dice5.png")
                                        }
                                    
                        else if (b===6){
                                            image2.setAttribute("src","images/dice6.png")
                                            }



if (a<b){
    document.getElementsByTagName("h1")[0].innerText="Player 2 Win";
}
else if(a>b){
    document.getElementsByTagName("h1")[0].innerText="Player 1 Win";
}
else if(a===b){
    document.getElementsByTagName("h1")[0].innerText="Draw";
}
