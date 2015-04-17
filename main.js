var url = window.location.href
if ( !url.includes('.m.') ) {
    var startEnd = url.split('.wikipedia')
    var mobileURL = startEnd[0] + '.m.wikipedia' + startEnd[1]
    window.location = mobileURL
}
