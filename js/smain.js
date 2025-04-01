window.addEventListener('load', e =>{
    console.clear();
    console.log('1.window load event triggered...');

    const grid =new Isotope("section",{
        itemSelector:"article",
        columnWidth:"article",
        transitionDuration:"0.2s"
    });
    console.log('2. grid:',grid);

    const isotopeBtns=document.querySelectorAll("main ul li");
    console.log('3. isotopeBtns:', isotopeBtns);

    for(let isotopeBtn of isotopeBtns) {

        isotopeBtn.addEventListener('click', e=> {
            console.clear();
            console.log('>>>isotopeBtn click event triggered...');

            e.preventDefault();

            const clickedBynHref=e.currentTarget.querySelector("a").getAttribute("href");
            console.log(`\t+ clickedBtnHref: ${clickedBynHref}`);

            grid.arrange({
                filter:clickedBynHref
            });

            for(let btn of isotopeBtns){
                btn.classList.remove("on");
            }
            e.currentTarget.classList.add("on");

        });
    }





});