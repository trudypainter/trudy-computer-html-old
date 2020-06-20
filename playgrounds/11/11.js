    var texts = []
    var dates = []
    var start = 1
    var index = 0
    var end = 10
    var h1 = document.querySelector('h1')

    loadBlocks(start, newIdea)

    function loadBlocks(page, fn) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var blocks = JSON.parse(this.responseText).contents
                blocks.forEach(x => { texts.unshift(x.content);
                    dates.unshift(formatDate(new Date(x.created_at))) })
                if (start < end) {
                    start++
                    loadBlocks(start, fn)
                } else {
                    fn()
                }
            }
        }
        xhttp.open(
            'GET',
            'https://api.are.na/v2/channels/thoughts-tnc0j8b-yd8?per=100&amp;page=1',
            true);
        xhttp.send();
    }

    function newIdea() {
        h1.innerHTML = texts[index] + "<br> <br>" + dates[index]
        index = index + 1
        if (index == texts.length) {
            index = 0
        }
    }

    function formatDate(date) {
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        var hour = date.getHours();
        var mins = date.getMinutes();
        if (mins < 10) {
            return day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + hour + ':0' + mins;
        }
        return day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + hour + ':' + mins;
    }

    h1.addEventListener('click', newIdea)