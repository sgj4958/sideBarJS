const sideBar = (rawObjectArray, depthKeyArray, iconNameArray, linkKeyString, logoUrlString, option = {router: href => location = href, removeSideButton: false, coverAnimation: false, logoHref: null}) => {
document.head.insertAdjacentHTML("beforeend", `
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<style>
.material-symbols-outlined {font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24}

body.sideWrap {
    margin-left: 250px;
    transition: .5s;
}
body.sideWrap.blind {
    margin-left: 0;
}

nav#sideWrap {
    --sideWrap-main-color: #393939;
    --sideWrap-sub-color: #5b5b5b;

    width: 250px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999;
    transition: .5s;
    position: fixed;
}
nav#sideWrap * {
    font-size: 14px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
nav#sideWrap a {
    color: inherit;
    text-decoration: inherit;
    width: 100%;
    height: 100%;
    display: block;
    transition: .1s;
}
nav#sideWrap a:hover {
    color: var(--sideWrap-main-color);
    font-weight: bolder;
}
nav#sideWrap li {
    list-style-type: none;
}
nav#sideWrap #sideHead {
    position: relative;
    height: 75px;
    border-bottom: 1px solid #555;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav#sideWrap #sideHead #sideLogo {
    height: 46px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
    margin-left: 10px;
}
nav#sideWrap #sideHead #sideLogo > * {
    max-width: 100%;
    max-height: 100%;
}
nav#sideWrap #sideHead #sideButton {
    border-radius: 10px;
    border: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 5px;
    background-color: var(--sideWrap-main-color);
    margin: 10px;
}
nav#sideWrap #sideHead #sideButton span {
    font-size: 30px;
    color: #eee;
    transition: .5s;
}
nav#sideWrap #sideBody {
    height: calc(100% - 75px);
    overflow: hidden scroll;
    text-align: left;
    color: #efefef;
}
nav#sideWrap #sideBody::-webkit-scrollbar {
    width: 0;
}
nav#sideWrap #sideBody::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 10px;
    border: 2px solid transparent;
}
nav#sideWrap #sideBody::-webkit-scrollbar-track {
    background-color: #eee;
    box-shadow: inset 0px 0px 5px white;
}
nav#sideWrap #sideBody .depthOneWrap {
    border-bottom: 1px solid #555;
}
nav#sideWrap #sideBody .depthOneName {
    font-size: 1.1em;
    font-weight: bolder;
    color: #aaa;
    padding: 10px;
}
nav#sideWrap #sideBody .depthTwoWrap {
    padding-left: 0;
    margin-top: 10px;
}
nav#sideWrap #sideBody .depthTwoHead {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 0 10px 10px;
}
nav#sideWrap #sideBody .depthTwoName {
    width: 100%;
    text-indent: 16px;
    margin: 0;
    height: 20px;
}
nav#sideWrap #sideBody .depthTwoHead i.depthTwoIcon {
    height: 20px;
}
nav#sideWrap #sideBody .depthTwoHead i.depthTwoIcon .material-symbols-outlined {
    font-size: 20px;
}
nav#sideWrap #sideBody .depthTwoHead i.depthTwoArrow {
    width: 20px;
    height: 20px;
    transform: rotate(-90deg);
    transform-origin: center;
    transition: .5s;
}
nav#sideWrap .turnArrow {
    transform: rotate(90deg) !important;
}
nav#sideWrap #sideBody .depthTwoHead i.depthTwoArrow .material-symbols-outlined {
    font-size: 20px;
}
nav#sideWrap #sideBody .depthThreeName {
    padding: 5px 0;
    margin: 5px 0;
    text-indent: 47px;
}
nav#sideWrap #sideBody .depthThreeWrap {
    overflow: hidden;
    transition: .5s;
    background-color: var(--sideWrap-sub-color);
}
nav#sideWrap #sideBody .depthTwoHead.singleDepth + .depthThreeWrap, 
nav#sideWrap #sideBody .depthTwoHead.singleDepth .depthTwoArrow {
    display: none;
}
nav#sideWrap .roll {
    height: 0 !important;
}
nav#sideWrap.blind {
    width: 0 !important;
}
nav#sideWrap.blind #sideHead {
    border: 0;
}
nav#sideWrap.blind #sideHead #sideLogo {
    margin: 0;
}
nav#sideWrap.blind #sideHead #sideButton span {
    transform: rotateY(540deg);
}
nav#sideWrap.blind #sideBody * {
    color: transparent;
    opacity: 0;
    transition: .5s;
}

nav#sideWrap #sideWrapCover {
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    transition: opacity .3s;
    opacity: .5;
    width: 100vw;
    height: 100vh;
}
nav#sideWrap #sideHead,
nav#sideWrap #sideBody {
    position: relative;
    z-index: 1;
    background-color: var(--sideWrap-main-color);
}
nav#sideWrap.blind #sideWrapCover {
    width: 0;
    height: 0;
    opacity: 0;
}
nav#sideWrap .removeElement {
    display: none !important;
}
nav#sideWrap:has(#sideButton.removeElement) #sideWrapCover {
    display: none;
}
</style>`)

        const createSideBar = (contentObjectArray, logoUrlString, option = {router: href => location = href, removeSideButton: false, coverAnimation: false, logoHref: null}) => {
            if(!option.coverAnimation) document.body.classList.add("sideWrap")

            const urlCheck = string => RegExp("^https?://").test(string)
            const svgCheck = string => /^<svg/i.test(string)

            document.body.insertAdjacentHTML("afterbegin", `
                <nav id="sideWrap">
                    <div id="sideHead">
                        <div id="sideLogo">
                            ${
                                urlCheck(logoUrlString)
                                ? `<img src="${logoUrlString}" title="logo">`
                                : logoUrlString
                            }
                        </div>
                        <div id="sideButton" class="${option.removeSideButton ? `removeElement` : ``}">
                            <span class="material-symbols-outlined">menu_open</span>
                        </div>
                    </div>
                        
                    <div id="sideBody">
                        ${
                            contentObjectArray.map(depthOneElement => `
                                <div class="depthOneWrap">
                                    ${
                                        depthOneElement.name ? `<p class="depthOneName">${depthOneElement.name}</p>` : ``
                                    }
                                    ${
                                        depthOneElement.child.map(depthTwoElement => `
                                            <ul class="depthTwoWrap">
                                                <li class="depthTwoHeadWrap">
                                                    <div class="depthTwoHead ${depthTwoElement.child[0]?.name ? `` : `singleDepth`}">
                                                        <i class="depthTwoIcon">
                                                            ${
                                                                urlCheck(depthTwoElement.icon)
                                                                ? `<img src="${logoUrlString}" title="icon">`
                                                                : svgCheck(depthTwoElement.icon)
                                                                ? depthTwoElement.icon
                                                                : `<span class="material-symbols-outlined">${depthTwoElement.icon}</span>`
                                                            }
                                                        </i>
                                                        <p class="depthTwoName">${depthTwoElement.name}</p>
                                                        <i class="depthTwoArrow">
                                                            <span class="material-symbols-outlined">chevron_right</span>
                                                        </i>
                                                    </div>

                                                    <ul class="depthThreeWrap">
                                                    ${
                                                        depthTwoElement.child.map(depthThreeElement => `
                                                            <li class="depthThreeName">
                                                                <a href="${depthThreeElement.link}">${depthThreeElement.name}</a>
                                                            </li>
                                                        `).join("")
                                                    }
                                                    </ul>

                                                </li>
                                            </ul>
                                        `).join("")
                                    }
                                </div>
                            `).join("")
                        }
                    </div>

                    <div id="sideWrapCover" class="${option.coverAnimation ? `` : `removeElement`}"></div>
                </nav>
            `)

            // roll 애니메이션 적용을 위해 높이주기
            document.querySelectorAll("nav#sideWrap .depthThreeWrap").forEach(element => element.style.height = getComputedStyle(element).height)

            // accordion 접고 펼치기
            document.querySelectorAll("nav#sideWrap .depthTwoHead").forEach(e0 => {
                e0.addEventListener("click", e1 => {
                    if(e0.classList.contains("singleDepth")) option.router(e0.parentNode.querySelector(".depthThreeName a").getAttribute("href"))

                    e1.currentTarget.querySelector("i.depthTwoArrow").classList.toggle("turnArrow")
                    e1.currentTarget.parentNode.querySelector(".depthThreeWrap").classList.toggle("roll")
                })
            })

            const sideBarControl = phase => {
                const status = phase === 1 ? "add" : phase === 2 ? "remove" : "toggle"
                sideWrap.classList[status]("blind")
                document.body.classList[status]("blind")
            }
            const closeSideBar = () => sideBarControl(1)
            const openSideBar = () => sideBarControl(2)
            const toggleSideBar = () => sideBarControl()

            // sidebar 접고 펼치기
            sideButton.addEventListener("click", toggleSideBar)
            sideWrapCover.addEventListener("click", closeSideBar)

            // 링크 이벤트 바꾸기
            document.querySelectorAll("nav#sideWrap .depthThreeName a").forEach(element => {
                element.addEventListener("click", event => {
                    event.preventDefault()
                    option.router(element.getAttribute("href"))
                })
            })

            // 로고 클릭시 링크 이동
            sideLogo.addEventListener("click", () => option.router(option.logoHref || "/"))
        }

        const depth3example = [
            {cate1: '대분류1', cate2: '중분류1', cate3: '소분류1', link: '111', data: []},
            {cate1: '대분류1', cate2: '중분류1', cate3: '소분류2', link: '112', data: []},
            {cate1: '대분류1', cate2: '중분류1', cate3: '소분류3', link: '113', data: []},
            {cate1: '대분류1', cate2: '중분류2', cate3: '소분류1', link: '121', data: []},
            {cate1: '대분류1', cate2: '중분류2', cate3: '소분류2', link: '122', data: []},
            {cate1: '대분류1', cate2: '중분류2', cate3: '소분류3', link: '123', data: []},

            {cate1: '대분류2', cate2: '중분류1', cate3: '소분류1', link: '211', data: []},
            {cate1: '대분류2', cate2: '중분류2', cate3: '소분류1', link: '221', data: []},
            {cate1: '대분류2', cate2: '중분류2', cate3: '소분류2', link: '222', data: []},
            {cate1: '대분류2', cate2: '중분류2', cate3: '소분류3', link: '223', data: []},
            {cate1: '대분류2', cate2: '중분류3', cate3: '소분류1', link: '231', data: []},
            {cate1: '대분류2', cate2: '중분류3', cate3: '소분류2', link: '232', data: []},

            {cate1: '대분류3', cate2: '중분류1', cate3: '소분류1', link: '311', data: []},
            {cate1: '대분류3', cate2: '중분류1', cate3: '소분류2', link: '312', data: []},
            
            {cate1: '대분류4', cate2: '단일뎁스1', link: '401', data: []},
            {cate1: '대분류4', cate2: '단일뎁스2', link: '402', data: []},
        ]
        
        const depth2example = [
            {cate1: '중분류1', cate2: '소분류1', link: '11', data: []},
            {cate1: '중분류1', cate2: '소분류2', link: '12', data: []},
            {cate1: '중분류1', cate2: '소분류3', link: '13', data: []},
            {cate1: '중분류1', cate2: '소분류4', link: '14', data: []},
            {cate1: '중분류1', cate2: '소분류5', link: '15', data: []},
            {cate1: '중분류1', cate2: '소분류6', link: '16', data: []},

            {cate1: '중분류2', cate2: '소분류1', link: '21', data: []},
            {cate1: '중분류2', cate2: '소분류2', link: '22', data: []},
            {cate1: '중분류2', cate2: '소분류3', link: '23', data: []},
            {cate1: '중분류2', cate2: '소분류4', link: '24', data: []},

            {cate1: '중분류3', cate2: '소분류1', link: '31', data: []},
            {cate1: '중분류3', cate2: '소분류2', link: '32', data: []},
        ]

        const createObjectArray = (rawObjectArray, depthKeyArray = ["depth1","depth2","depth3"], iconNameArray = [], linkKeyString = "link") => {
            const defaultIconName = "settings"

            const checkDepth = () => {
                switch(depthKeyArray.length) {
                    default: return
                    case 2:
                        depthKeyArray.unshift(`temporaryDepth-${
                            Math.floor(Math.random() * 10e5)
                        }`)
                        rawObjectArray.map(e => ({
                            ...e,
                            [depthKeyArray[0]]: null
                        }))
                    case 3: return createDepthThree()
                }
            }

            const createDepthOne = () => 
                Array.from(
                    new Set(
                        rawObjectArray.map(e => e[depthKeyArray[0]])
                    )
                ).map(e => ({
                    name: e
                }))

            const createDepthTwo = () => 
                createDepthOne()
                .map(e0 => ({
                    ...e0,
                    child:
                        Array.from(
                            new Set(
                                rawObjectArray
                                .filter(e1 => e1[depthKeyArray[0]] == e0.name)
                                .map(e1 => e1[depthKeyArray[1]])
                            )
                        ).map(e1 => ({
                            name: e1,
                            icon: iconNameArray.shift() || defaultIconName
                        }))
                }))
            
            const createDepthThree = () => 
                createDepthTwo()
                .map(e0 => ({
                    ...e0,
                    child: e0.child.map(e1 => ({
                        ...e1,
                        child:
                            rawObjectArray
                            .filter(e2 => e2[depthKeyArray[0]] == e0.name && e2[depthKeyArray[1]] == e1.name)
                            .map(e2 => ({
                                name: e2[depthKeyArray[2]],
                                link: e2[linkKeyString]
                            }))
                    }))
                }))
            
            return checkDepth()
        }

        const createSideBarSample = () =>
        createSideBar(
            createObjectArray(depth3example, ["cate1", "cate2", "cate3"], ["search", "home", "settings", "favorite", "star", "more_vert"]),
            `<svg xmlns="http://www.w3.org/2000/svg" width="272" height="92" viewBox="0 0 272 90">
                <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
                <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
                <path fill="#EA4335" d="m262.02 54.48 7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98 19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
                <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
            </svg>`
            , {
                router: a => alert('router:::' + a),
                removeSideButton: false,
                coverAnimation: false
            }
        )
   
        return rawObjectArray 
        ? createSideBar(createObjectArray(rawObjectArray, depthKeyArray, iconNameArray, linkKeyString), logoUrlString, option) 
        : createSideBarSample()
    }