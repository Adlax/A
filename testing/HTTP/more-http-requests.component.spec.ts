it('performs a POST', async( () => {
  backend.connections.subscribe( c => {
    expect(c.request.url).toBe('http://jsonplaceholder.typicode.com/posts');
    expect(c.request.method).toBe(RequestMethod.Post);
    c.mockRespond(new Response( <any>{body: '{"response": "OK"}'} ));
  });
  component.makePost();
  expect(component.data).toEqual({'response: 'OK});
}));

it('Perorms a DELETE request', async( () => {
  backend.connections.subscribe( c => {
    expect(c.request.url).toBe('http://jsonplaceholder.typicode.com/posts/1');
    expect(c.request.method).toBe(RequestMethod.Delete);
    c.mockRespond(new Response( <any>{body: '{"response": "OK"}'} ));
  });
  component.makeDelete();
  expect(component.data).toEqual({'response' : 'OK'});
}));

it('sends a request with some headers', async( () => {
  backend.connections.subscribe( c => {
    expect(c.request.url).toBe(http://jsonplaceholder.typicode.com/posts/1);
    expect(c.request.headers.has('X-API-TOKEN')).toBeTruthy();
    expect(c.request.headers.get('X-API-TOKEN')).toEqual('ng-book2');
    c.mockRespond(new Response( <any>{body: '{"response": "OK"}'} ));
  });
  component.makeHeaders();
  expect(component.data).toEqual({'response': 'OK'});
}));
