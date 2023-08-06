<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfTokenApi extends Middleware
{
    public function handle($request, Closure $next)
    {
        // Se a requisição for uma solicitação de leitura (GET, HEAD, OPTIONS),
        // ou se o token CSRF for válido, então continue a requisição normalmente.
        if ($request->method() === 'GET' || $this->tokensMatch($request)) {
            return $next($request);
        }

        // Se o token CSRF for inválido ou estiver faltando, retorne uma resposta de erro.
        return response()->json(['message' => 'Token CSRF inválido.'], 419);
    }
}
