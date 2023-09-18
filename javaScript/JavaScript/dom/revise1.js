let ele = document.createElement('li');
ele.textContent = "I am first list"

let ele2 = document.createElement('li');
ele2.textContent = "I am first list 2"


ele.append(ele2)

document.body.appendChild(ele)
// document.body.appendChild(ele2)