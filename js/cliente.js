class cliente{
    constructor(name,lastname,dni,balance){
    
        this._name = name;
        this._lastname = lastname;
        this._dni = dni;
        this._balance = balance;
    }
        getFullName(){
            return this._lastname + ", " + this._name;
            
        }
    }
    let clientes = [];
    button = document.getElementById("button").addEventListener('click',show);
    
  function agregarCliente() {

        let name = document.querySelector('#name').value;
        let lastname = document.querySelector('#lastname').value;
        let dni = document.querySelector('#dni').value;
        let balance = document.querySelector('#balance').value;
        let cliente = new cliente(name,lastname,dni,balance);
        return cliente;
    }

    function show(e){
        e.preventDefault();
    
        let ul = document.getElementById("list");
        let li = document.createElement("li");
        ul.appendChild(li);

        let fullname = newCliente().getFullName;
        
        let content = document.createTextNode(fullname);
        li.appendChild(content);

        save(fullname);
    
    }

    function save(cliente){
         clientes.push(cliente);
         localStorage.setItem('cliente',JSON.stringify(clientes));
    }
    
    