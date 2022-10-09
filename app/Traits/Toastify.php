<?php

namespace App\Traits;

use Exception;

trait Toastify
{
    public function sendSuccess($msg = "Action was successfull")
    {
        $this->dispatchBrowserEvent('toast', ['type' => 'success', 'message' => "$msg ✅"]);
    }

    public function sendError($msg = "Action was failed")
    {
        $this->dispatchBrowserEvent('toast',  ['type' => 'error', 'message' => "$msg ❌"]);
    }

    public function sendException(Exception $e)
    {
        $this->dispatchBrowserEvent('toast', ['type' => 'info', 'message' => 'There was an exception, ' . $e->getMessage() . ' ❌']);
    }
}
