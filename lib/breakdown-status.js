'use babel';


export default BreakdownStatus = (function() {

    return {
        init(statusBar) {
            this.statusBar = statusBar;
            this.element = document.createElement('div');
            this.element.classList.add('breakdown-status', 'inline-block');
            statusBar.addLeftTile({
                item: this.element,
                priority: 500
            });
        },

        destroy() {
            this.element.remove();
            this.statusBar.destroy();
        },

        getElement() {
            return this.element;
        },

        setStatus(message) {
            this.element.innerHTML = message;
        },

        clear() {
            this.setStatus('');
        }

    }
})();