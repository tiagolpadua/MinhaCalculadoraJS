(function (window, undefined) {
    window.Calculadora = Calculadora;

    function Calculadora() {
    }

    Calculadora.prototype.somar = function (a, b) {
        return a + b;
    };

    Calculadora.prototype.incrementar = function (a) {
        return a + 1;
    };
}(window));