//creación de un elemento personalizable (WebComponent General)
class crearBoton extends HTMLElement{
    constructor(){
        super();
        this.textContent = '¡Haz click aquí!';
        this.addEventListener('click',()=>alert("Hiciste click!!!"));
    }
}
customElements.define('mi-boton', crearBoton);

//--------------------------------------------------------------------------------
//Creación de un elemento personalizable (ShadowDon)
class crearBotonShadow extends HTMLElement{
    constructor(){
        super();
        let miShadow = this.attachShadow({mode:'open'});
        miShadow.innerHTML=`
        <button>Soy un boton lindo!</button>
        `
    }
}
customElements.define('boton-shadow', crearBotonShadow)