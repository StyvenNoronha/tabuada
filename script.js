
const formulti = document.querySelector("#form-multi")

formulti.addEventListener("submit", (e) =>{
    e.preventDefault();
    const number = Number(document.querySelector("#number").value);
    const multi = Number(document.querySelector("#multiplicador").value);
    const multiTable = document.querySelector("#multi-operacao")
    if (!number || !multi) return;
    const createtable = (number,multi)=>{
        multiTable.innerHTML = ""
        for(i = 1; i <= multi; i++)
        {
            const resu = number * i
            const template = `
            <div class="row">
                <div class="operation">${number}x${i} = </div>
                <div class="result">${resu}</div>
            </div>
            `
            const parser = new DOMParser()
            const htmlTemplate = parser.parseFromString(template,"text/html")
            const row = htmlTemplate.querySelector(".row")
            multiTable.appendChild(row)
        }
    }
   createtable(number,multi)
    
})
