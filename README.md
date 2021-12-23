# Backend With NodeJS

## Day 2 - Understanding different types of status codes
* [HTTP Status Code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
* Status codes are issued by a server in response to a client's request made to the server
* The first digit of the status code specifies one of five standard classes of responses. The message phrases shown are typical, but any human-readable alternative may be provided. Unless otherwise stated, the status code is part of the HTTP/1.1 standard (RFC 7231)
* All HTTP response status codes are separated into five classes or categories. The first digit of the status code defines the class of response, while the last two digits do not have any classifying or categorization role. There are five classes defined by the standard:

      * 1xx informational response – the request was received, continuing process
      * 2xx successful – the request was successfully received, understood, and accepted
      * 3xx redirection – further action needs to be taken in order to complete the request
      * 4xx client error – the request contains bad syntax or cannot be fulfilled
      * 5xx server error – the server failed to fulfil an apparently valid request