function initShader(gl,VERTEX_SHADER_SOURCE,FRAGMENT_SHADER_SOURCE){
     //创建着色器
     const vertexShader=gl.createShader(gl.VERTEX_SHADER);
     const fragmentShader=gl.createShader(gl.FRAGMENT_SHADER);
 
     gl.shaderSource(vertexShader,VERTEX_SHADER_SOURCE)
     gl.shaderSource(fragmentShader,FRAGMENT_SHADER_SOURCE)
 
     //编译着色器
     gl.compileShader(vertexShader);
     gl.compileShader(fragmentShader);
 
     //创建一个程序对象
     const program=gl.createProgram();
     gl.attachShader(program,vertexShader)
     gl.attachShader(program,fragmentShader)
 
     gl.linkProgram(program);
     gl.useProgram(program)
     return program
}