var currentPage = 1
const pageSize = 10    
const init = ()=>{
    document.querySelector('.contact-list').innerHTML=''
    const total = users.length
    let startIdx = pageSize * (currentPage-1)
    let endIdx = pageSize * currentPage
    if(endIdx > total) endIdx = total

    for(i = startIdx; i< endIdx; i++){
        document.querySelector('.contact-list').innerHTML+=renderUser(users[i])
    }
    document.querySelector('.total').innerText=`Total: ${total}`
    addPagination(currentPage, total, pageSize);
}

const renderUser = (user)=>{
    return `
    <li class="contact-item cf">
        <div class="contact-details">
            <img class="avatar" src="${user.picture.thumbnail}">
            <h3>${user.name.first} ${user.name.last}</h3>
            <span class="email">${user.email}</span>
        </div>
        <div class="joined-details">
            <span class="date">Joined ${new Date(user.registered.date).toLocaleDateString('en-US')}</span>
        </div>
    </li>   `
}

const goToPage = (targetPage)=>{
    currentPage = targetPage;
    init();
}

const addPagination = (currentPage, totalRecords, pageSize)=>{

    const totalNumOfPages = Math.ceil(totalRecords/pageSize)
    document.querySelector('.pagination').innerHTML=''
    for (i = 1; i<=totalNumOfPages; i++){
        const href = i == currentPage ? "#" : `javascript(goto(${i}))`
        const active = i==currentPage ? "active" :""
        document.querySelector('.pagination').innerHTML+=`<li><a href="#" class="${active}" onclick="goToPage(${i})">${i}</a></li>`
    }
}

init();
