<?php

namespace App\Http\Controllers;
use \App\Models\Usuarios;

use Illuminate\Http\Request;

class RegistroController extends Controller
{
    public function register(Request $request){

        /* Enviando mensagem de erro caso o nome tenha menos de 3 caracteres */
        if(strlen($request->nome) < 3){
            return response()->json(['message' => 'O nome deve ter mais que 3 caracteres'], 400);
        }

        /* Envia mensagem de erro caso o nome tenha mais que 20 caracteres */
        if(strlen($request->nome) > 20){
            return response()->json(['message' => 'O nome deve ter menos que 20 caracteres'], 400);
        }

        /* Enviando mensagem de erro caso a senha tenha menos de 6 caracteres */
        if($request->confirmacaoSenha != $request->senha){
            return response()->json(['message' => 'As senhas não coincidem'], 400);
        }

        /* Verificar se o email já está cadastrado */
        $confirmaEmail = Usuarios::where('emailUsuario', $request->email)->first();
        if($confirmaEmail){
            return response()->json(['message' => 'Este email já está cadastrado'], 400);
        }

        /* Verificar se o nome de usuário já existe */
        $confirmaUsuario = Usuarios::where('nomeUsuario', $request->nome)->first();
        if($confirmaUsuario){
            return response()->json(['message' => 'Este nome de usuário já existe'], 400);
        }

        /* Criar um hash da senha */
        $novaSenha = password_hash($request->senha, PASSWORD_DEFAULT);

        $request->validate([
            'nome' => 'required|min:3|max:20',
            'email' => 'required|email',
            'senha' => 'required|min:6|max:20',
            'confirmacaoSenha' => 'required|min:6|max:20'
        ]);


        
        /* Criar um novo usuário */
        $usuario = new Usuarios();
        $usuario->nomeUsuario = $request->nome;
        $usuario->emailUsuario = $request->email;
        $usuario->senhaUsuario = $novaSenha;
        $usuario->save();

        return response()->json(['message' => 'Sucesso!'], 201);
    }
}
