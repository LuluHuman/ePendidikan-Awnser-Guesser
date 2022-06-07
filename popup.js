window.addEventListener("load", async function() {
    document.getElementsByTagName("button")[0].addEventListener("click", async() => {
        setInterval(async() => {
            let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: a,
            });

            function a() {
                const allqns = document.getElementById("exercise").children
                for (let i = 0; i < allqns.length; i++) {
                    const ele = allqns[i]
                    if (!ele.attributes.type) {
                        const rnj = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
                        if (ele.children[0].children[rnj]) ele.children[0].children[rnj].children[0].children[0].children[0].checked = true
                    }
                }
                document.getElementById("process").click()
            }
        }, 500);
    })
})