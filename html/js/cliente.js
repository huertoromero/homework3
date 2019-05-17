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
    
  function crearCliente() {

        let client = {};
        const name = document.querySelector('#name').value;
        const lastname = document.querySelector('#lastname').value;
        const dni = document.querySelector('#dni').value;
        const balance = document.querySelector('#balance').value;
        client = new cliente(name,lastname,dni,balance);
        return client;
    }

    function show(e){
        e.preventDefault();
    
        let ul = document.getElementById("list");
        let li = document.createElement("li");
        ul.appendChild(li);

        
        const cliente = crearCliente();
        let fullname = cliente.getFullName();
        let content = document.createTextNode(fullname);
        li.appendChild(content);

        save(fullname);
    
    }

    function save(cliente){
         clientes.push(cliente);
         localStorage.setItem('cliente',JSON.stringify(clientes));
    }
    
    