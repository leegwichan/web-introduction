const enrollButton = document.getElementById('enroll');
enrollButton.onclick = () => enroll();

const cancelButton = document.getElementById('reset');
cancelButton.onclick = () => reset();

function enroll() {
    const visitorName = document.getElementById('visitorName').value;
    if (visitorName.length == 0) {
        alert('이름을 입력해 주세요');
        return;
    }

    const selectedElements = document.querySelectorAll('input[name="movie"]:checked');
    const selectedElementsNum = selectedElements.length;

    alert( visitorName + '님, 저와 ' + selectedElementsNum + '개의 취향이 같으시네요!');
}

function reset() {
    document.getElementById('visitorName').value = null;

    document.querySelectorAll('input[name="movie"]')
            .forEach(checkbox => checkbox.checked = false);
}
