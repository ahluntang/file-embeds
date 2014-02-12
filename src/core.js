(function(){

if (!self.document || !document.querySelector) {
    return;
}

    /**
     * Depth-first search for all pre tags with data-src attribute
     */
    Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function(pre) {
        var src = pre.getAttribute('data-src');
        
        var code = document.createElement('code');
        
        pre.textContent = '';
        
        code.textContent = 'Loading...';
        
        pre.appendChild(code);
        
        var xhr = new XMLHttpRequest();

        /* Detect GitHub */
        var is_github = /https:\/\/github.com\//i.test(src);
        if (is_github) {
            var match = src.match( /https:\/\/github.com\/([^\/]+)\/([^\/]+)\/([^\/]+)\/([^\/]+)\/([\s\S]+)/);
            var github = {
                user: match[1],
                repo: match[2],
                path: match[5]
            };
            src = 'https://api.github.com/repos/' + github.user + '/' + github.repo + '/contents/' + github.path;
        }

        xhr.open('GET', src, true);

        /* If GitHub uri, set Accept to raw */
        if (is_github) {
            xhr.setRequestHeader('Accept', 'application/vnd.github.v3.raw');
        }

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                
                if (xhr.status < 400 && xhr.responseText) {
                    code.textContent = xhr.responseText;
                }
                else if (xhr.status >= 400) {
                    code.textContent = ' Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
                }
                else {
                    code.textContent = ' Error: File does not exist or is empty';
                }
            }
        };
        
        xhr.send(null);
    });

})();
