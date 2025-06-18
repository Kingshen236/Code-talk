addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('button');

    btn.addEventListener('click', () => {
      let name = document.getElementById("name").value;
      console.log('Button clicked!');
      document.getElementById("header").textContent ="Welcome " + name ;
    });
    
    if (name.value = "monke")() => {
      document.body.style.backgroundColor("brown");
    }

});