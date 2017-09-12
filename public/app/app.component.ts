import { Component } from '@angular/core';

@Component({
    selector: 'trader',
    template: `
        <header>
            <nav class="navbar navbar-inverse">
                <div class="navbar-header">
                    <a href="/" class="navbar-brand">Trader Application</a>                    
                </div>
            </nav>
        </header>
        <div class="jumbotron">
            Trading Software
        </div>
        <footer class="text-center">
            Copyright &copy; 2017
        </footer>
    `
})
export class AppComponent {
    
}