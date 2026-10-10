class Inventario {
    constructor() {
        this.primero = null;
    }

    agregar(nuevo) {
        if (this.primero == null) {
            this.primero = nuevo;
        } else {
            let aux = this.primero;
            while (aux.siguiente != null) {
                aux = aux.siguiente;
            }
            aux.siguiente = nuevo;
        }
    }

    agregarInicio(nuevo) {
        nuevo.siguiente = this.primero;
        this.primero = nuevo;
    }

    buscar(codigo) {
        let aux = this.primero;
        while (aux != null) {
            if (aux.codigo == codigo) {
                return aux;
            }
            aux = aux.siguiente;
        }
        return null;
    }

    eliminar(codigo) {
        if (this.primero == null) {
            return null;
        }

        if (this.primero.codigo == codigo) {
            let eliminado = this.primero;
            this.primero = this.primero.siguiente;
            eliminado.siguiente = null;
            return eliminado;
        }

        let anterior = this.primero;
        while (anterior.siguiente != null && anterior.siguiente.codigo != codigo) {
            anterior = anterior.siguiente;
        }

        if (anterior.siguiente == null) {
            return null;
        }

        let eliminado = anterior.siguiente;
        anterior.siguiente = eliminado.siguiente;
        eliminado.siguiente = null;
        return eliminado;
    }

    insertar(posicion, nuevo) {
        if (isNaN(posicion) || posicion < 0) {
            return false;
        }

        if (posicion == 0) {
            this.agregarInicio(nuevo);
            return true;
        }

        let anterior = this.primero;
        let i = 0;
        while (anterior != null && i < posicion - 1) {
            anterior = anterior.siguiente;
            i++;
        }

        if (anterior == null) {
            return false;
        }

        nuevo.siguiente = anterior.siguiente;
        anterior.siguiente = nuevo;
        return true;
    }

    extraerPrimero() {
        if (this.primero == null) {
            return null;
        }
        let extraido = this.primero;
        this.primero = this.primero.siguiente;
        extraido.siguiente = null;
        return extraido;
    }

    listar() {
        if (this.primero == null) {
            return "<p>Inventario vacío</p>";
        }
        let texto = "";
        let aux = this.primero;
        while (aux != null) {
            texto += aux.infoHTML();
            aux = aux.siguiente;
        }
        return texto;
    }

    listarInverso() {
        if (this.primero == null) {
            return "<p>Inventario vacío</p>";
        }
        return this._inverso(this.primero);
    }

    _inverso(nodo) {
        if (nodo == null) {
            return "";
        }
        return this._inverso(nodo.siguiente) + nodo.infoHTML();
    }
}